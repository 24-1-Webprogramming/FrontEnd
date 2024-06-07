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
import GroupEmpty from './stories/Pages/Group/GroupEmpty';
import DashBoard from './stories/Pages/DashBoard/DashBoard';

import GroupPage from './stories/Pages/Group/GroupPage';
import GroupJoin from './stories/Pages/Group/GroupJoin';
import GroupCreate from './stories/Pages/Group/GroupCreate';
import Group from './stories/Pages/Group/Group';

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

          <Route path="/home" element={<Home/>} />

          <Route path="/entry/meal" element={<Meal/>} />
          <Route path="/entry/water" element={<Water/>} />
          <Route path="/entry/weight" element={<Weight/>} />
          <Route path="/entry/DDay" element={<DDay/>} />

          <Route path="/group/empty" element={<GroupEmpty/>} />
          <Route path="/group" element={<Group/>} />
          <Route path="/group/join" element={<GroupJoin/>} />
          <Route path="/group/create" element={<GroupCreate/>} />
          <Route path="/group/:" element={<GroupPage/>} />

          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
