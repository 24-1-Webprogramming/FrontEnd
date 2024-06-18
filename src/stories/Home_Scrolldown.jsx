import React from 'react';
import LogoIcon  from '../Icon/Logo2.svg';
import Home_Scrolldown_Meal from './Home_Scrolldown_Meal';
import Home_Scrolldown_Weight from './Home_Scrolldown_Weight';
import Home_Scrolldown_DDay from './Home_Scrolldown_DDay';
import Home_DDayAdd from './Home_DDayAdd'; // Home_DDayAdd 컴포넌트 임포트
import NavBar from './NavBar';

const Home_Scrolldown = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={LogoIcon} />
      </div>
      <Home_DDayAdd
        continuousExerciseDays={30} // 예시 값
        progressBarsData={[
          { totalSteps: 100, currentStep: 70, color: "#72BBFF" },
          { totalSteps: 100, currentStep: 50, color: "#4D61F5" },
          { totalSteps: 100, currentStep: 90, color: "#4D61F5" },
          { totalSteps: 100, currentStep: 30, color: "#4D61F5" }
        ]}
        characterMessage="화이팅!"
      />
      <div style={styles.content}>
        <div style={{ ...styles.section, marginTop: '50px' }}>
          <Home_Scrolldown_Meal />
        </div>
        <div style={{ ...styles.section, marginTop: '-400px' }}>
          <Home_Scrolldown_Weight />
        </div>
        <div style={styles.section}>
          <Home_Scrolldown_DDay />
        </div>
      </div>
      <NavBar />
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    maxWidth: '393px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflowY: 'auto',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    paddingBottom: '80px',
    position: 'relative',
  },
  header: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '111px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 1000,
    padding: '10px',
    boxSizing: 'border-box',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  content: {
    width: '100%',
    marginTop: '111px', // Ensure content starts below the fixed header
  },
  section: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 20px',
    marginBottom: '20px',
  },
};

export default Home_Scrolldown;