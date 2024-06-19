import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../../Component/Button';
import TextField from '../../../Component/TextField';
import styled from 'styled-components';
import Header from '../../../Component/Header';

const Meal = () => {
    const { time } = useParams(); // URL에서 time 파라미터 추출
    const [step, setStep] = useState(0);
    const [responses, setResponses] = useState([]);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [currentInput, setCurrentInput] = useState('');
    const navigate = useNavigate();

    const initialQuestions = [
        { intro: '맛있게 드셨나봐요', question: '어떤 음식을 드셨나요?', unit: '', allowedCharsType: '' },
        { intro: '', question: '탄수화물 정보를 알려주세요 (g)', unit: 'g', allowedCharsType: 'numericWithDecimal' },
        { intro: '', question: '단백질 정보를 알려주세요 (g)', unit: 'g', allowedCharsType: 'numericWithDecimal' },
        { intro: '', question: '지방 정보를 알려주세요 (g)', unit: 'g', allowedCharsType: 'numericWithDecimal' },
    ];
    const [questions, setQuestions] = useState(initialQuestions);

    useEffect(() => {
        if(responses[0]){
            const updatedQuestions = questions.map((item, index) => {
                if (index > 0) {
                    return { ...item, intro: `${responses[0]}의` };
                }
                return item;
            });
            setQuestions(updatedQuestions);
        }
        if (responses.length === initialQuestions.length) {
            const carbs = parseFloat(responses[1] || 0);
            const protein = parseFloat(responses[2] || 0);
            const fats = parseFloat(responses[3] || 0);
            const totalCalories = Math.round(carbs * 4 + protein * 4 + fats * 9); // 소숫점 제거하고 반올림
            const newResponses = [...responses, totalCalories]; // 총 칼로리 추가
            localStorage.setItem(time, JSON.stringify(newResponses)); // 로컬 스토리지에 저장
            console.log('Saved to localStorage:', newResponses); // 로컬 스토리지 값 로깅
            navigate('/home');
        }
    }, [responses, time, navigate]);
    

    const handleInputChange = (value) => {
        setCurrentInput(value);
        setIsButtonEnabled(value.trim() !== '');
    };

    const handleNextStep = () => {
        const newResponses = [...responses, currentInput];
        setResponses(newResponses);

        if (step < questions.length - 1) {
            setStep(step + 1);
            setCurrentInput('');
            setIsButtonEnabled(false);
        }
    };

    return (
        <>
            <Header text="식사 기록" path="/home" />
            <Container>
                {questions.map((question, index) => (
                    step === index && (
                        <SurveyContent
                            key={index}
                            step={step}
                            intro={question.intro}
                            question={question.question}
                            handleInputChange={handleInputChange}
                            isButtonEnabled={isButtonEnabled}
                            handleNextStep={handleNextStep}
                            currentInput={currentInput}
                            allowedCharsType={question.allowedCharsType}
                        />
                    )
                ))}
            </Container>
        </>
    );
};

const SurveyContent = ({
    step, intro, question, allowedCharsType, handleInputChange, currentInput, isButtonEnabled, handleNextStep
}) => {
    return (
        <ContainerTop>
            <StepText>{step + 1}/{4}</StepText>
            <TextBox>
                <h2 style={{ color: '#000', textAlign: 'left', marginBottom: '5px' }}>{intro}</h2>
                <h2 style={{ color: '#495EF6', textAlign: 'left', marginTop: '5px' }}>{question}</h2>
            </TextBox>
            <TextField
                onChange={(e) => handleInputChange(e.target.value)}
                value={currentInput}
                allowedCharsType={allowedCharsType}
                placeholder=""
                width="321px"
            />
            <AnswerButtons isButtonEnabled={isButtonEnabled} handleNextStep={handleNextStep} isLastStep={step === 4 - 1} />
        </ContainerTop>
    );
};

const AnswerButtons = ({ isButtonEnabled, handleNextStep, isLastStep }) => (
    <AnswerButtonContainer>
        <Button
            onClick={handleNextStep}
            disabled={!isButtonEnabled}
            label={isLastStep ? '완료' : '다음'}
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
`;
const Container = styled.div`
  background-color: '#fff';
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  justify-content: 'center'; // 가운데 정렬
`;

const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 322px;
  color: var(--deprecated-Gray-01, #252525);
  font-size: 16px;
  font-style: normal;
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

export default Meal;
