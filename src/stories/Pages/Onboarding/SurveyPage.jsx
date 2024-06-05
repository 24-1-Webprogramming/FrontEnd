import React, { useState, useEffect } from 'react';
import { Button } from '../../Component/Button';
import TextField from '../../Component/TextField';
import ProgressBar from '../../Component/ProgressBar';
import questions from './data/question'; // Assuming you move questions to a separate file
import styled from 'styled-components';

//TODO : 체중 입력 안됨

const SurveyPage = () => {
  const [step, setStep] = useState(0); //단계
  const [responses, setResponses] = useState(Array(questions.length).fill(null)); //답변 저장 배열
  const [currentWeight, setCurrentWeight] = useState(''); //현재 몸무게
  const [loadingDots, setLoadingDots] = useState(''); //로딩

  //점 로딩용
  useEffect(() => {
    const updateLoadingDots = () => {
      setLoadingDots(prev => prev.length < 3 ? prev + '.' : '');
    };

    if (step === questions.length - 1) {
      const interval = setInterval(updateLoadingDots, 500);
      return () => clearInterval(interval);
    }
  }, [step]);

  //답변 제출 함수
  const handleAnswerClick = (answer) => {
    const newResponses = [...responses, answer]; //기존 응답값에 새 응답값 추가
    setResponses(newResponses);
    localStorage.setItem('surveyAnswers', JSON.stringify(newResponses));
    
    if (step < questions.length - 1) { //현재 스탭이 마지막 스탭이 아니라면
      setStep(step + 1); //스탭 추가
    } else { //마지막 스탭이라면
      console.log('Survey complete:', newResponses); //응답값 제출
    }
  };

  //몸무게 제출
  const handleWeightSubmit = () => {
    if (currentWeight.trim()) { //공백 제거 후 삽입
      handleAnswerClick(`${currentWeight}`);
    }
  };


  return (
    //초기 세팅
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
      />
    </div>
  );
};

const SurveyContent = ({ step, intro, question, description, answers, currentWeight, onWeightChanged, onSubmitWeight, onAnswerClick, loadingDots }) => (
  <>
    <ContainerTop>
      <StepText>{step + 1}/{questions.length}</StepText>
      <TextBox>
        <h2 style={{ color: '#000', textAlign: 'left', marginBottom: '5px' }}>{intro}</h2>
        <h2 style={{ color: '#495EF6', textAlign: 'left', marginTop: '5px' }}>{question}</h2>
        <p style={{ textAlign: 'left', fontSize:'16px', fontWeight:500}}>{description}</p>
      </TextBox>
    </ContainerTop>


    {step === questions.length - 1 && (
      <>
        <img src="../../DumbbellDefault.svg" style={{ width: '100px', margin: '10px auto', display: 'block' }} />
        <p style={{ textAlign: 'center', fontSize: 'small' }}>Customizing your dumbbell{loadingDots}</p>
      </>
    )}
    {step === 1 ? (
      <Container>
        <TextField
          value={currentWeight}
          onChange={onWeightChanged} // Make sure this is the correct function name
          maxLength={10}
          placeholder=""
          allowedCharsType="numericWithDecimal"
          showCharCount={false}
        />
      </Container>
    ) : (<></>)}
    <AnswerButtons answers={answers} onAnswerClick={onAnswerClick} />
  </>
);

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
const Container = styled.div`
  width: 324px;
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