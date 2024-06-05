import React, { useState, useEffect } from 'react';
import { Button } from '../../Component/Button';
import TextField from '../../Component/TextField';
import ProgressBar from '../../Component/ProgressBar';
import questions from './data/question'; // Assuming you move questions to a separate file
import styled from 'styled-components';


const SurveyPage = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [currentWeight, setCurrentWeight] = useState('');
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const updateLoadingDots = () => {
      setLoadingDots(prev => prev.length < 3 ? prev + '.' : '');
    };

    if (step === questions.length - 1) {
      const interval = setInterval(updateLoadingDots, 500);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleAnswerClick = (answer) => {
    const newResponses = [...responses, answer];
    setResponses(newResponses);
    localStorage.setItem('surveyAnswers', JSON.stringify(newResponses));
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      console.log('Survey complete:', newResponses);
      // Redirect or further actions
    }
  };
  

  const handleWeightSubmit = () => {
    if (currentWeight.trim()) {
      handleAnswerClick(`${currentWeight} kg`);
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
      />
    </div>
  );
};

const StepText = styled.div`
  color: var(--Base-Gray-700, #3F3F45);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 50px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 369px;
`

const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TextBox = styled.div`
  width: 322px;
  height: 63px;
  color: var(--deprecated-Gray-01, #252525);
  font-size: 16px;
  font-style: normal;
`

const SurveyContent = ({ step, intro, question, description, answers, currentWeight, onWeightChanged, onSubmitWeight, onAnswerClick, loadingDots }) => (
  <Container>
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
      <TextField
        value={currentWeight}
        onChange={onWeightChanged} // Make sure this is the correct function name
        maxLength={10}
        placeholder=""
        allowedCharsType="numericWithDecimal"
        showCharCount={false}
      />
    ) : (<></>)}
    <AnswerButtons answers={answers} onAnswerClick={onAnswerClick} />
  </Container>
);



const FixedButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: #fff; // 배경색 추가
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1); // 하단 그림자 효과
  display: flex;
  justify-content: center;
  flex-direction: column; // 변경: 버튼을 세로로 나열
  align-items: center;
  z-index: 1000; // 다른 요소 위에 위치
`;


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


export default SurveyPage;