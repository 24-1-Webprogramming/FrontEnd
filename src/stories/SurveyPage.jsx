import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import TextBox from './TextBox';
import ProgressBar from './ProgressBar';

const questions = [
  {
    intro: '고마워요,',
    question: '성별이 어떻게 되시나요?',
    description: '적절한 운동계획을 제공할 때 필요해요! 외부에 공개되지 않아요',
    answers: ['남성', '여성']
  },
  {
    intro: '금고에 넣어둘게요!',
    question: '체중을 알려주세요',
    description: '적절한 운동계획을 제공할 때 필요해요! 외부에 공개되지 않아요',
    answers: ['입력 완료']
  },
  {
    intro: '고마워요,',
    question: '원하는 체형을 선택해주세요.',
    description: '원하는 체형이 될 수 있도록 맛있다가 도울게요',
    answers: ['건강한 몸', '근육질의 몸', '근육으로 가득 찬 몸']
  },
  {
    intro: '좋은 목표에요,',
    question: '헬스 경험이 있나요?',
    description: '헬스 수준에 맞춰 체계적인 서비스를 제공할게요',
    answers: ['처음이에요', '3개월 이내', '3~6개월', '6~12개월', '1년 이상']
  },
  {
    intro: '무릎을 대고 푸쉬업을',
    question: '몇 개할 수 있나요?',
    description: '운동 수준에 맞춰 체계적인 서비스를 제공할게요',
    answers: ['10개 이하', '10~20개', '20~30개', '30개 이상', '잘 모르겠어요']
  },
  {
    intro: '대단한데요?',
    question: '운동 목표를 선택해주세요!',
    description: '원하는 목표에 맞춰 미션을 수행해봐요!',
    answers: ['1주일에 2번', '1주일에 3~4번', '1주일에 5번 이상', '안 정해둘래요']
  },
  {
    intro: '마지막이에요!',
    question: '맞춤형 플랜을 만들어 드릴게요',
    description: '적절한 운동에 필요해요! 외부에 공개되지 않아요',
    answers: ['좋아요!', '직접 설정할래요!']
  }
];

const SurveyPage = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [currentWeight, setCurrentWeight] = useState('');
  const [loadingDots, setLoadingDots] = useState('');

  const handleAnswerClick = (answer) => {
    const newResponses = [...responses];
    newResponses[step] = answer;
    setResponses(newResponses);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // 설문조사 완료 후 처리 로직 추가
      console.log('설문조사 완료:', newResponses);
    }
  };

  const handleWeightChange = (e) => {
    setCurrentWeight(e.target.value);
  };

  const handleWeightSubmit = () => {
    if (currentWeight.trim() !== '') {
      handleAnswerClick(currentWeight + ' kg');
    }
  };

  useEffect(() => {
    if (step === 5) {
      const interval = setInterval(() => {
        setLoadingDots(prev => {
          if (prev === '...') return '';
          return prev + '.';
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [step]);

  const progressPercentage = ((step + 1) / questions.length) * 100;

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <ProgressBar totalSteps={questions.length} currentStep={step + 1} width="100%" height="8px" />
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h6 style={{ color: '#495EF6', textAlign: 'left', marginBottom: '10px' }}>{step + 1}/{questions.length}</h6>
        <h2 style={{ color: '#000', textAlign: 'left', marginBottom: '5px' }}>{questions[step].intro}</h2>
        <h2 style={{ color: '#495EF6', textAlign: 'left', marginTop: '5px' }}>{questions[step].question}</h2>
        <p style={{ textAlign: 'left' }}>{questions[step].description}</p>
        {step === questions.length - 1 && (
          <>
            <img src="../../DumbbellDefault.svg" style={{ width: '100px', margin: '20px auto', display: 'block' }} />
            <p style={{ textAlign: 'center', fontSize: 'small' }}>맞춤 아령 만드는 중{loadingDots}</p>
          </>
        )}
        {step === 1 && (
          <>
            <TextBox
              value={currentWeight}
              onChange={handleWeightChange}
              maxLength={5}
              showCharCount={false} // 문자 수 표시
              placeholder="체중을 입력해주세요"
              allowedCharsType="numericWithDecimal"
              customText="Kg"
            />
            <Button
              onClick={handleWeightSubmit}
              label="입력 완료"
              type="secondary"
              size="medium"
              style={{ margin: '10px 0', width: '100%' }}
              disabled={currentWeight.trim() === ''}
            />
          </>
        )}
        {step !== 1 && (
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            {questions[step].answers.map((answer, index) => (
              <Button 
                key={index}
                onClick={() => handleAnswerClick(answer)} 
                label={answer}
                type="secondary"
                size="medium"
                style={{ margin: '10px 0', width: '100%' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyPage;
