import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Splash from './stories/Pages/Onboarding/Splash';
import ProfileSetup from './stories/Pages/Onboarding/ProfileSetup';
import SurveyStart from './stories/Pages/Onboarding/SurveyStart';
import SurveyPage from './stories/Pages/Onboarding/SurveyPage';
import Error from './stories/Pages/Error';
import GlobalStyle from './stories/Component/GlobalStyle';
import Meal from './stories/Pages/Home/entry/Meal';
import Water from './stories/Pages/Home/entry/Water';
import Weight from './stories/Pages/Home/entry/Weight';
import DDay from './stories/Pages/Home/entry/DDay';
import Home from './stories/Pages/Home/Home';


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
          <Route path="/entry/meal" element={<Meal/>} />
          <Route path="/entry/water" element={<Water/>} />
          <Route path="/entry/weight" element={<Weight/>} />
          <Route path="/entry/DDay" element={<DDay/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
