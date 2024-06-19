import React, { useState, useEffect } from 'react';
import { Button } from '../../Component/Button';
import TextField from '../../Component/TextField';
import ProgressBar from '../../Component/ProgressBar';
import {questions} from '../data/data';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SurveyPage = () => {
  const [step, setStep] = useState(0); // 단계
  const [responses, setResponses] = useState(Array(questions.length).fill(null)); // 답변 저장 배열
  const [currentWeight, setCurrentWeight] = useState(''); // 현재 몸무게
  const [loadingDots, setLoadingDots] = useState(''); // 로딩
  const [nickname, setNickname] = useState(''); // 닉네임
  const navigate = useNavigate();
  
  // 점 로딩용
  useEffect(() => {
    const updateLoadingDots = () => {
      setLoadingDots(prev => prev.length < 3 ? prev + '.' : '');
    };

    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    };

    if (step === questions.length - 1) {
      const interval = setInterval(updateLoadingDots, 500);
      return () => clearInterval(interval);
    }
  }, [step]);

  // 기존 state 및 useEffect 로직
  const handleNextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setCurrentWeight(''); // 현재 체중 입력 필드 초기화
    } else {
      // 설문 완료 시 로직
      const userEmail = localStorage.getItem('userEmail'); // 사용자 이메일
      const onboardData = {
        user_id: userEmail,
        purpose: responses[2], // 예: '근육으로 가득 찬 몸'
        period: responses[3],  // 예: '6~12개월'
        push_up: responses[4], // 예: 숫자 또는 '잘 모르겠어요'
        goal: responses[5]     // 예: '1주일에 5번 이상'
      };

      const RoutineData = {
        user_info: {
          sex: responses[0],
          body_type: responses[2], // 예: '근육으로 가득 찬 몸'
          experience: responses[3],  // 예: '6~12개월'
          pushup_count: responses[4], // 예: 숫자 또는 '잘 모르겠어요'
          workout_frequency: responses[5]     // 예: '1주일에 5번 이상'
        }
      };

      axios.post('http://soongitglwebp8.site/onboard/setOnboard', onboardData)
        .then(response => {
          console.log('Onboarding data posted successfully:', response);
        })
        .catch(error => {
          console.log(onboardData);
          console.error('Failed to post onboarding data:', error);
          navigate('/Error'); // 실패 시 에러 페이지로 이동
        });

      console.log('Survey complete:', responses);

      localStorage.setItem('surveyAnswers', JSON.stringify(responses));
      axios.post('https://a43pwwzgih.execute-api.ap-northeast-2.amazonaws.com/default/AIRoutine', RoutineData)
        .then(response => {
          try {
            console.log('Routine data posted successfully:', response.data);
            const res = JSON.stringify(response.data);
            localStorage.setItem('AIRoutine', res);
            navigate('/Exercise/main'); // 성공 시 홈으로 이동
          } catch (error) {
            console.error('Failed to parse response body:', error);
            navigate('/Error'); // 실패 시 에러 페이지로 이동
          }
        })
        .catch(error => {
          console.log("RoutineData", RoutineData);
          console.error('Failed to post routine data:', error);
          navigate('/Error'); // 실패 시 에러 페이지로 이동
        });
    }
  };

  // handleAnswerClick 함수에서 handleNextStep 호출
  const handleAnswerClick = (answer) => {
    const newResponses = responses.map((response, index) => index === step ? answer : response);
    setResponses(newResponses);

    handleNextStep(); // 직접적으로 다음 단계를 처리
  };

  // 몸무게 제출
  const handleWeightSubmit = () => {
    if (currentWeight.trim()) {
      handleAnswerClick(currentWeight); // 현재 몸무게를 응답 배열에 추가
      localStorage.setItem('weightAmount', currentWeight); // 몸무게를 localStorage에 저장
      setCurrentWeight(''); // 입력 필드 초기화
  
      // Get the user email from local storage
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail) {
        // Construct the API URL
        const weightApiUrl = `http://soongitglwebp8.site/weight/${userEmail}`;
        // Make the API call to post weight
        axios.post(weightApiUrl, { weight: currentWeight })
          .then(response => console.log('Weight posted successfully:', response))
          .catch(error => console.error('Failed to post weight:', error));
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginTop:'100px' }}>
      <ProgressBar totalSteps={questions.length} currentStep={step + 1} width="324px" height="8px" />
      <SurveyContent
        step={step}
        intro={questions[step].intro}
        question={questions[step].question}
        description={questions[step].description}
        answers={questions[step].answers}
        currentWeight={currentWeight}
        onWeightChange={setCurrentWeight}
        onSubmitWeight={handleWeightSubmit}
        onAnswerClick={handleAnswerClick}
        loadingDots={loadingDots}
        nickname={nickname}
      />
    </div>
  );
};

const SurveyContent = ({
  step, intro, question, description, answers, currentWeight, onWeightChange, onSubmitWeight, onAnswerClick, loadingDots, nickname
}) => {
  return (
    <>
      <ContainerTop>
        <StepText>{step + 1}/{questions.length}</StepText>
        <TextBox>
          <h2 style={{ color: '#000', textAlign: 'left', marginBottom: '5px' }}>{intro}</h2>
          <h2 style={{ color: '#495EF6', textAlign: 'left', marginTop: '5px' }}>{question}</h2>
          <p style={{ textAlign: 'left', fontSize: '16px', fontWeight: 500 }}>{description}</p>
        </TextBox>
      </ContainerTop>

      {step === 1 && (
        <TextField
          allowedCharsType="numeric"
          maxLength={3}
          value={currentWeight}
          onChange={(e) => onWeightChange(e.target.value)}
          placeholder=""
          showCharCount={false}
          customText="kg"
          width="300px"
        />
      )}
      {step === questions.length - 1 && (
        <>
          <img src="../../DumbbellDefault.svg" style={{ width: '100px', margin: '10px auto', display: 'block' }} />
          <p style={{ textAlign: 'center', fontSize: 'small' }}><b>{nickname}</b>님의 맞춤 아령 만드는 중{loadingDots}</p>
        </>
      )}
      <AnswerButtons answers={answers} onAnswerClick={(answer) => {
        if (step === 1 && currentWeight.trim()) {
          onAnswerClick(currentWeight);  // 체중 데이터 처리
        } else {
          onAnswerClick(answer); // 다음 질문으로 넘어감
        }
      }} />
    </>
  );
};

const AnswerButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 20px;
  background-color: #fff; // Ensure background color for visibility
  display: flex;
  justify-content: center;
  flex-direction: column; // Stack buttons vertically
  align-items: center;
  z-index: 1000; // Ensure it stays on top of other content
`;

const AnswerButtons = ({ answers, onAnswerClick }) => (
  <AnswerButtonContainer>
    {answers.map((answer, index) => (
      <Button
        key={index}
        onClick={() => onAnswerClick(answer)}
        label={answer}
        type="border"
        size="medium"
        style={{ margin: '5px 0', width: '321px' }} // Ensure width is fixed to 321px and adjust margin for spacing
      />
    ))}
  </AnswerButtonContainer>
);

const StepText = styled.div`
  color: var(--Base-Gray-700, #3F3F45);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 50px;
`

const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom:70px;
`

const TextBox = styled.div`
  width: 322px;
  height: 63px;
  color: var(--deprecated-Gray-01, #252525);
  font-size: 16px;
  font-style: normal; 
`

export default SurveyPage;
