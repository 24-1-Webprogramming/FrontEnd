import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StopwatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 200px;
`;

const TimeDisplay = styled.div`
  color: #404040;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: white;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <StopwatchContainer>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <ButtonContainer>
        {time === 0 ? (
          <Button onClick={startTimer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
  <path d="M19.5 0C15.7422 0 12.0687 1.11433 8.94417 3.20208C5.81964 5.28982 3.38436 8.25722 1.9463 11.729C0.508232 15.2008 0.131969 19.0211 0.865088 22.7067C1.59821 26.3924 3.40778 29.7778 6.06498 32.435C8.72218 35.0922 12.1077 36.9018 15.7933 37.6349C19.4789 38.368 23.2992 37.9918 26.771 36.5537C30.2428 35.1156 33.2102 32.6804 35.2979 29.5558C37.3857 26.4313 38.5 22.7578 38.5 19C38.4947 13.9625 36.4912 9.13288 32.9292 5.57085C29.3671 2.00881 24.5375 0.00531967 19.5 0ZM26.9082 20.2021L17.4082 26.779C17.1889 26.9307 16.9322 27.0195 16.6661 27.0357C16.3999 27.052 16.1344 26.9951 15.8983 26.8713C15.6621 26.7475 15.4643 26.5614 15.3263 26.3333C15.1883 26.1051 15.1154 25.8436 15.1154 25.5769V12.4231C15.1154 12.1564 15.1883 11.8949 15.3263 11.6667C15.4643 11.4386 15.6621 11.2525 15.8983 11.1287C16.1344 11.0049 16.3999 10.948 16.6661 10.9643C16.9322 10.9805 17.1889 11.0693 17.4082 11.221L26.9082 17.7979C27.1026 17.9323 27.2615 18.112 27.3713 18.3213C27.4811 18.5307 27.5384 18.7636 27.5384 19C27.5384 19.2364 27.4811 19.4693 27.3713 19.6787C27.2615 19.888 27.1026 20.0677 26.9082 20.2021Z" fill="#5467F5"/>
</svg>
          </Button>
        ) : isRunning ? (
          <Button onClick={stopTimer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
  <path d="M19.5 0C15.7422 0 12.0687 1.11433 8.94417 3.20208C5.81964 5.28982 3.38436 8.25722 1.9463 11.729C0.508232 15.2008 0.131969 19.0211 0.865088 22.7067C1.59821 26.3924 3.40778 29.7778 6.06498 32.435C8.72218 35.0922 12.1077 36.9018 15.7933 37.6349C19.4789 38.368 23.2992 37.9918 26.771 36.5537C30.2428 35.1156 33.2102 32.6804 35.2979 29.5558C37.3857 26.4313 38.5 22.7578 38.5 19C38.4937 13.9628 36.4899 9.13374 32.9281 5.57191C29.3663 2.01008 24.5372 0.0062847 19.5 0ZM16.5769 24.8461C16.5769 25.2338 16.4229 25.6055 16.1489 25.8796C15.8748 26.1537 15.503 26.3077 15.1154 26.3077C14.7278 26.3077 14.356 26.1537 14.0819 25.8796C13.8078 25.6055 13.6539 25.2338 13.6539 24.8461V13.1538C13.6539 12.7662 13.8078 12.3945 14.0819 12.1204C14.356 11.8463 14.7278 11.6923 15.1154 11.6923C15.503 11.6923 15.8748 11.8463 16.1489 12.1204C16.4229 12.3945 16.5769 12.7662 16.5769 13.1538V24.8461ZM25.3462 24.8461C25.3462 25.2338 25.1922 25.6055 24.9181 25.8796C24.644 26.1537 24.2722 26.3077 23.8846 26.3077C23.497 26.3077 23.1252 26.1537 22.8512 25.8796C22.5771 25.6055 22.4231 25.2338 22.4231 24.8461V13.1538C22.4231 12.7662 22.5771 12.3945 22.8512 12.1204C23.1252 11.8463 23.497 11.6923 23.8846 11.6923C24.2722 11.6923 24.644 11.8463 24.9181 12.1204C25.1922 12.3945 25.3462 12.7662 25.3462 13.1538V24.8461Z" fill="#5467F5"/>
</svg>
          </Button>
        ) : (
          <>
            <Button onClick={resetTimer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
  <path d="M19.5 0C15.7422 0 12.0687 1.11433 8.94417 3.20208C5.81964 5.28982 3.38436 8.25722 1.9463 11.729C0.508232 15.2008 0.131969 19.0211 0.865088 22.7067C1.59821 26.3924 3.40778 29.7778 6.06498 32.435C8.72218 35.0922 12.1077 36.9018 15.7933 37.6349C19.4789 38.368 23.2992 37.9918 26.771 36.5537C30.2428 35.1156 33.2102 32.6804 35.2979 29.5558C37.3857 26.4313 38.5 22.7578 38.5 19C38.4947 13.9625 36.4912 9.13288 32.9292 5.57085C29.3671 2.00881 24.5375 0.00531967 19.5 0ZM25.3462 24.1154C25.3462 24.3092 25.2692 24.4951 25.1321 24.6321C24.9951 24.7692 24.8092 24.8461 24.6154 24.8461H14.3846C14.1908 24.8461 14.0049 24.7692 13.8679 24.6321C13.7308 24.4951 13.6539 24.3092 13.6539 24.1154V13.8846C13.6539 13.6908 13.7308 13.5049 13.8679 13.3679C14.0049 13.2308 14.1908 13.1538 14.3846 13.1538H24.6154C24.8092 13.1538 24.9951 13.2308 25.1321 13.3679C25.2692 13.5049 25.3462 13.6908 25.3462 13.8846V24.1154Z" fill="#6F6F6F"/>
</svg>
            </Button>
            <Button onClick={startTimer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
  <path d="M19.5 0C15.7422 0 12.0687 1.11433 8.94417 3.20208C5.81964 5.28982 3.38436 8.25722 1.9463 11.729C0.508232 15.2008 0.131969 19.0211 0.865088 22.7067C1.59821 26.3924 3.40778 29.7778 6.06498 32.435C8.72218 35.0922 12.1077 36.9018 15.7933 37.6349C19.4789 38.368 23.2992 37.9918 26.771 36.5537C30.2428 35.1156 33.2102 32.6804 35.2979 29.5558C37.3857 26.4313 38.5 22.7578 38.5 19C38.4947 13.9625 36.4912 9.13288 32.9292 5.57085C29.3671 2.00881 24.5375 0.00531967 19.5 0ZM26.9082 20.2021L17.4082 26.779C17.1889 26.9307 16.9322 27.0195 16.6661 27.0357C16.3999 27.052 16.1344 26.9951 15.8983 26.8713C15.6621 26.7475 15.4643 26.5614 15.3263 26.3333C15.1883 26.1051 15.1154 25.8436 15.1154 25.5769V12.4231C15.1154 12.1564 15.1883 11.8949 15.3263 11.6667C15.4643 11.4386 15.6621 11.2525 15.8983 11.1287C16.1344 11.0049 16.3999 10.948 16.6661 10.9643C16.9322 10.9805 17.1889 11.0693 17.4082 11.221L26.9082 17.7979C27.1026 17.9323 27.2615 18.112 27.3713 18.3213C27.4811 18.5307 27.5384 18.7636 27.5384 19C27.5384 19.2364 27.4811 19.4693 27.3713 19.6787C27.2615 19.888 27.1026 20.0677 26.9082 20.2021Z" fill="#5467F5"/>
</svg>
            </Button>
          </>
        )}
      </ButtonContainer>
    </StopwatchContainer>
  );
};

export default Stopwatch;
