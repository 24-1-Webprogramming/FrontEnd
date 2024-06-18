import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import LogoIcon from '../Icon/Logo2.svg';
import CharacterIcon from '../Icon/Crying2.svg';
import ProgressBar from './ProgressBar';

const Home_DDayAdd = ({ continuousExerciseDays, progressBarsData, characterMessage }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10).replace(/-/g, '.');
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.logoHeader}>
        <img src={LogoIcon} />
      </div>
      <div style={styles.header}>
        <div style={styles.leftContainer}>
          <button style={styles.bodyProfileButton}>
            <span style={styles.bodyProfileText}>바디프로필</span>
          </button>
          <span style={styles.dDay}>D-16</span>
        </div>
        <span style={styles.date}>{currentDate}</span>
      </div>
      <div style={styles.characterSection}>
        <div style={styles.characterContainer}>
          <div style={styles.characterMessageContainer}>
            <span style={styles.characterMessage}>{characterMessage}</span>
          </div>
            <img src={CharacterIcon} />
        </div>
        <div style={styles.exerciseInfo}>
          <span style={styles.exerciseDaysText}>연속 운동</span>
          <div style={styles.spacer}></div>
          <span style={styles.exerciseCountText}>{continuousExerciseDays}일째..</span>
          <div style={styles.divider}></div>
          <div style={styles.progressBars}>
            <div style={styles.progressBarContainer}>
              <span style={styles.progressLabel}>물 섭취</span>
              <ProgressBar totalSteps={100} currentStep={70} direction="horizontal" width="130px" height="8px" color="#72BBFF" />
            </div>
            <div style={styles.progressBarContainer}>
              <span style={styles.progressLabel}>순탄수</span>
              <ProgressBar totalSteps={100} currentStep={50} direction="horizontal" width="130px" height="8px" color="#4D61F5" />
            </div>
            <div style={styles.progressBarContainer}>
              <span style={styles.progressLabel}>단백질</span>
              <ProgressBar totalSteps={100} currentStep={90} direction="horizontal" width="130px" height="8px" color="#4D61F5" />
            </div>
            <div style={styles.progressBarContainer}>
              <span style={styles.progressLabel}>지방</span>
              <ProgressBar totalSteps={100} currentStep={30} direction="horizontal" width="130px" height="8px" color="#4D61F5" />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

Home_DDayAdd.propTypes = {
  continuousExerciseDays: PropTypes.number.isRequired,
  progressBarsData: PropTypes.arrayOf(
    PropTypes.shape({
      totalSteps: PropTypes.number.isRequired,
      currentStep: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  characterMessage: PropTypes.string.isRequired,
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '393px',
    height: '852px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  logoHeader: {
    width: '100%',
    height: '80px', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '30px',
    boxSizing: 'border-box',
  },
  logo: {
    width: '40px',
    height: '40px',
  },
  header: {
    width: '393px',
    height: '51px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px',
    backgroundColor: '#5467F5',
    marginTop: '10px', // Ensure proper spacing below the logo header
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    marginLeft: '20px',
  },
  bodyProfileButton: {
    borderRadius: '7px',
    background: '#FFF',
    display: 'flex',
    padding: '4px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    marginLeft: '0px',
  },
  bodyProfileText: {
    color: '#2F4BF7',
    fontFamily: 'Pretendard Variable',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
  },
  dDay: {
    color: '#fff',
    fontFamily: 'Pretendard Variable',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
    marginLeft: '10px',
  },
  date: {
    color: '#fff',
    fontFamily: 'Pretendard Variable',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    marginRight: '20px',
  },
  characterSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '140px', // Adjust margin top to ensure proper spacing below the header
  },
  characterContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  characterMessageContainer: {
    backgroundColor: '#E0E7FF',
    borderRadius: '20px',
    padding: '5px 10px',
    marginBottom: '10px',
    alignSelf: 'center',
  },
  characterMessage: {
    fontFamily: 'Pretendard Variable',
    fontSize: '12px',
    fontWeight: 700,
    color: '#4F46E5',
  },
  character: {
    width: '110px',
    height: '180px',
    alignSelf: 'center',
  },
  exerciseInfo: {
    marginLeft: '20px',
    width: '50%',
  },
  exerciseDaysText: {
    fontFamily: 'Pretendard Variable',
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#000000',
  },
  exerciseCountText: {
    fontFamily: 'Pretendard Variable',
    fontSize: '30px',
    fontWeight: 800,
    marginBottom: '10px',
    color: '#4D61F5',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#E0E0E0',
    margin: '10px 0',
  },
  progressBars: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  progressBarContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  progressLabel: {
    fontFamily: 'Pretendard Variable',
    fontSize: '12px',
    fontWeight: 500,
    color: '#000000',
    width: '50px', // Ensure the labels are all aligned
  },
};

export default Home_DDayAdd;