import React, { useState } from 'react';
import { Button } from '../../../Component/Button';
import TextField from '../../../Component/TextField';
import styled from 'styled-components';
import Header from '../../../Component/Header';
import { water } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const Water = () => {
    const [step, setStep] = useState(0); // 단계
    const [responses, setResponses] = useState(Array(water.length).fill(null)); // 답변 저장 배열
    const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 여부
    const [currentInput, setCurrentInput] = useState(''); // 현재 입력값
    const navigate = useNavigate();

    const handleInputChange = (value) => {
        setCurrentInput(value);
        setIsButtonEnabled(value.trim() !== ''); // 입력값이 비어 있지 않으면 버튼 활성화
    };

    const handleNextStep = () => {
        const newResponses = responses.map((response, index) => index === step ? currentInput : response);
        setResponses(newResponses);
        localStorage.setItem('water', JSON.stringify(newResponses));

        if (step < water.length - 1) {
            setStep(step + 1);
            setCurrentInput(''); // 입력값 초기화
            setIsButtonEnabled(false); // 버튼 비활성화
        } else {
            const [waterAmount] = newResponses;
            localStorage.setItem('waterAmount', waterAmount);
            console.log('water complete:', newResponses);
            navigate('/home');
        }
    };

    return (
        <>
            <Header text="물 섭취량"  path="/home"/>
            <Container>
              <SurveyContent
                  step={step}
                  intro={water[step].intro}
                  question={water[step].question}
                  handleInputChange={handleInputChange}
                  isButtonEnabled={isButtonEnabled}
                  handleNextStep={handleNextStep}
                  currentInput={currentInput}
                  allowedCharsType={water[step].allowedCharsType}
              />
            </Container>
        </>
    );
};

const SurveyContent = ({
    step, intro, question, allowedCharsType, handleInputChange, currentInput, isButtonEnabled, handleNextStep
  }) => {
    return (
      <>
        <ContainerTop>
          <StepText>{step + 1}/{water.length}</StepText>
          <TextBox>
            <h2 style={{ color: '#000', textAlign: 'left', marginBottom: '5px' }}>{intro}</h2>
            <h2 style={{ color: '#495EF6', textAlign: 'left', marginTop: '5px' }}>{question}</h2>
          </TextBox>
          <TextField 
            onChange={(e) => handleInputChange(e.target.value)}
            value={currentInput}
            allowedCharsType={allowedCharsType}
            placeholder=""
            customText={water[step].unit}
            width="321px"
          />
        </ContainerTop>

        <AnswerButtons isButtonEnabled={isButtonEnabled} handleNextStep={handleNextStep} />
      </>
    );
};

const AnswerButtons = ({ isButtonEnabled, handleNextStep }) => (
    <AnswerButtonContainer>
      <Button
        onClick={handleNextStep}
        disabled={!isButtonEnabled}  // 버튼 활성화/비활성화 상태에 따라
        label='기록하기'
        type="primary"
        size="medium"
        style={{ margin: '5px 0', width: '321px' }}
      />
    </AnswerButtonContainer>
);

const StepText = styled.div`
  color: var(--Base-Gray-700, #3F3F45);
  font-size: 12px;
  font-style: normal;
  width: 322px;
  font-weight: 400;
  line-height: normal;
  margin-top: 50px;
  align-items: start;
  justify-content: start;
`
const Container = styled.div`
  background-color: '#fff';
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  justify-content: 'center'; // 가운데 정렬
`

const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:70px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`

const TextBox = styled.div`
  width: 322px;
  color: var(--deprecated-Gray-01, #252525);
  font-size: 16px;
  font-style: normal; 
`

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

export default Water;
