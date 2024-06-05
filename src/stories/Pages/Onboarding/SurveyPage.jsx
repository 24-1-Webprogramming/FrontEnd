import React, { useState, useEffect } from 'react';
import { Button } from '../../Component/Button';
import TextField from '../../Component/TextField';
import ProgressBar from '../../Component/ProgressBar';
import {questions} from '../data/data';
import styled from 'styled-components';


const SurveyPage = () => {
  const [step, setStep] = useState(0); //단계
  const [responses, setResponses] = useState(Array(questions.length).fill(null)); //답변 저장 배열
  const [currentWeight, setCurrentWeight] = useState(''); //현재 몸무게
  const [loadingDots, setLoadingDots] = useState(''); //로딩
  const [nickname, setNickname] = useState(''); //닉네임

  //점 로딩용
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

  const handleAnswerClick = (answer) => {
    const newResponses = responses.map((response, index) => index === step ? answer : response);
    setResponses(newResponses);
    localStorage.setItem('surveyAnswers', JSON.stringify(newResponses));

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      console.log('Survey complete:', newResponses);
    }
  };
  

  //몸무게 제출
  const handleWeightSubmit = () => {
    if (currentWeight.trim()) {
      handleAnswerClick(currentWeight); // 현재 몸무게를 응답 배열에 추가
      setCurrentWeight(''); // 입력 필드 초기화
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
  step, intro, question, description, answers, currentWeight, onWeightChange, onAnswerClick, loadingDots, nickname
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
        }
        else{
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