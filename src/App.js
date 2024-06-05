import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Splash from './stories/Pages/Onboarding/Splash';
import ProfileSetup from './stories/Pages/Onboarding/ProfileSetup';
import SurveyStart from './stories/Pages/Onboarding/SurveyStart';
import SurveyPage from './stories/Pages/Onboarding/SurveyPage';
import Error from './stories/Pages/Error';
import GlobalStyle from './stories/Component/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<ProfileSetup/>}/>
          <Route path="/survey" element={<SurveyStart />} />
          <Route path="/survey/question" element={<SurveyPage/>} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
