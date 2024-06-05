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
    const newResponses = [...responses];
    newResponses[step] = answer;
    setResponses(newResponses);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      console.log('Survey complete:', newResponses);
      // Here you might want to redirect or perform further actions
    }
  };

  const handleWeightSubmit = () => {
    if (currentWeight.trim()) {
      handleAnswerClick(`${currentWeight} kg`);
    }
  };


  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
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

const SurveyContent = ({ step, intro, question, description, answers, currentWeight, onWeightChange, onSubmitWeight, onAnswerClick, loadingDots }) => (
  <div style={{ width: '100%', maxWidth: '600px' }}>
    <h6 style={{ color: '#495EF6', textAlign: 'left', marginBottom: '10px' }}>{step + 1}/{questions.length}</h6>
    <h2 style={{ color: '#000', textAlign: 'left', marginBottom: '5px' }}>{intro}</h2>
    <h2 style={{ color: '#495EF6', textAlign: 'left', marginTop: '5px' }}>{question}</h2>
    <p style={{ textAlign: 'left' }}>{description}</p>
    {step === questions.length - 1 && (
      <>
        <img src="../../DumbbellDefault.svg" style={{ width: '100px', margin: '20px auto', display: 'block' }} />
        <p style={{ textAlign: 'center', fontSize: 'small' }}>Customizing your dumbbell{loadingDots}</p>
      </>
    )}
    {step === 1 ? (
      <WeightInputField
        currentWeight={currentWeight}
        onChange={onWeightChange}
        onSubmit={onSubmitWeight}
      />
    ) : (
      <AnswerButtons answers={answers} onAnswerClick={onAnswerClick} />
    )}
  </div>
);

const WeightInputField = ({ currentWeight, onChange, onSubmit }) => (
  <>
    <CustomTextField
      value={currentWeight}
      onChange={onChange}
      maxLength={5}
      placeholder="Enter your weight"
      allowedCharsType="numericWithDecimal"
      customText="Kg"
    />
    <Button
      onClick={onSubmit}
      label="Submit Weight"
      type="secondary"
      size="medium"
      style={{ margin: '10px 0', width: '100%' }}
      disabled={!currentWeight.trim()}
    />
  </>
);


const AnswerButtons = ({ answers, onAnswerClick }) => (
  <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
    {answers.map((answer, index) => (
      <Button
        key={index}
        onClick={() => onAnswerClick(answer)}
        label={answer}
        type="secondary"
        size="medium"
        style={{ margin: '10px 0', width: '100%' }}
      />
    ))}
  </div>
);


const CustomTextField = ({ value, onChange, maxLength, placeholder, allowedCharsType, customText }) => {
  const validateInput = (event) => {
    const regex = allowedCharsType === 'numericWithDecimal' ? /^[0-9]*\.?[0-9]*$/ : /^[0-9]*$/;
    if (!regex.test(event.target.inputValue)) {
      event.preventDefault();
      return; // Prevent input if it doesn't match the regex
    }
    onChange(event); // Invoke onChange prop function if input is valid
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={validateInput}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {customText && <span>{customText}</span>}
    </div>
  );
};

const TopContainer = styled.div`
 margin-top: 100px; 
`

export default SurveyPage;
