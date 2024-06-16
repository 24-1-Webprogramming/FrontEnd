// src/stories/Home_DDayAdd.jsx
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { ReactComponent as LogoIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Logo-color.svg';
import { ReactComponent as CharacterIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Characters/DumbbellCrying3.svg';
import ProgressBar from './ProgressBar';

const Home_DDayAdd = ({ continuousExerciseDays, progressBarsData }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <LogoIcon style={styles.logo} />
        <button style={styles.bodyProfileButton}>
          <span style={styles.bodyProfileText}>바디프로필</span>
        </button>
        <span style={styles.dDay}>D-16</span>
        <span style={styles.date}>2024.05.18</span>
      </div>
      <div style={styles.characterSection}>
        <CharacterIcon style={styles.character} />
        <div style={styles.exerciseInfo}>
          <span>연속 운동 <strong>{continuousExerciseDays}</strong>일째..</span>
          {progressBarsData.map((bar, index) => (
            <ProgressBar
              key={index}
              totalSteps={bar.totalSteps}
              currentStep={bar.currentStep}
              direction="horizontal"
              width="100%"
              height="8px"
              color={bar.color}
            />
          ))}
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
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px',
    backgroundColor: '#2F4BF7',
  },
  logo: {
    width: '40px',
    height: '40px',
  },
  bodyProfileButton: {
    borderRadius: '7px',
    background: '#FFF',
    display: 'flex',
    padding: '4px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  bodyProfileText: {
    color: '#2F4BF7',
    fontFamily: 'Pretendard',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  dDay: {
    color: '#fff',
    fontFamily: 'Pretendard',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  date: {
    color: '#fff',
    fontFamily: 'Pretendard',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  characterSection: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
  },
  character: {
    width: '100px',
    height: '100px',
  },
  exerciseInfo: {
    marginLeft: '20px',
  },
};

export default Home_DDayAdd;