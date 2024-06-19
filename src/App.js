import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
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
import Statistic from './stories/Pages/Statistic/statistic';

import AddressSettingPage from './stories/Pages/Address/GymInfoPage';
import Gymfilter from './stories/Pages/Address/Gymfilter';
import GymDetailPage from './stories/Pages/Address/GymDetailPage';

import GroupPage from './stories/Pages/Group/GroupPage';
import GroupJoin from './stories/Pages/Group/GroupJoin';
import GroupCreate from './stories/Pages/Group/GroupCreate';
import Group from './stories/Pages/Group/Group';
import GroupCreateSuccess from './stories/Pages/Group/GroupCreateSuccess';
import GroupJoinSuccess from './stories/Pages/Group/GroupJoinSuccess';

import Mypage from './stories/Pages/Mypage/Mypage';
import GroupInvite from './stories/Pages/Group/GroupInvite';

import ExercisePage from './stories/Pages/Exercise/ExercisePage';
import ExerciseRoutineList from './stories/Pages/Exercise/ExerciseRoutineList';
import ExerciseAddDetail from './stories/Pages/Exercise/ExerciseAddDetail';
import ExercisePlay from './stories/Pages/Exercise/ExercisePlay';
import ExerciseAdd from './stories/Pages/Exercise/ExerciseAdd';
import ExerciseEdit from './stories/Pages/Exercise/ExerciseEdit';
import ExerciseComplete from './stories/Pages/Exercise/ExerciseComplete';
import ExerciseWrite from './stories/Pages/Exercise/ExerciseWrite';

const googleClientId = '241488948308-7719rl1iltknq0c1mnea32tbhg463ac2.apps.googleusercontent.com'; // Replace this with your actual client ID

const App = () => {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<ProfileSetup/>}/>
          <Route path="/survey" element={<SurveyStart />} />
          <Route path="/survey/question" element={<SurveyPage/>} />

          <Route path="/home" element={<Home/>} />

          <Route path="/entry/meal/:time" element={<Meal/>} />
          <Route path="/entry/water" element={<Water/>} />
          <Route path="/entry/weight" element={<Weight/>} />
          <Route path="/entry/DDay" element={<DDay/>} />

          <Route path="/gym" element={<AddressSettingPage />} />
          <Route path="/gymDetail" element={<GymDetailPage />} />
          <Route path="/gymfilter/:district" element={<Gymfilter />} />

          <Route path="/group/empty" element={<GroupEmpty/>} />
          <Route path="/group" element={<Group/>} />
          <Route path="/group/join" element={<GroupJoin/>} />
          <Route path="/group/create" element={<GroupCreate/>} />
          <Route path="/group/create/success" element={<GroupCreateSuccess/>} />
          <Route path="/group/join/success" element={<GroupJoinSuccess/>} />
          <Route path="/group/:id" element={<GroupPage/>} />
          <Route path="/group/:id/invite" element={<GroupInvite/>} />

          <Route path="/statistic" element={<Statistic/>} />

          <Route path="/Exercise/main" element={<ExercisePage/>} />
          <Route path="/Exercise/routine/list" element={<ExerciseRoutineList/>} />
          <Route path="/Exercise/routine/:id/add" element={<ExerciseAdd/>} />
          <Route path="/Exercise/routine/:id/add/detail" element={<ExerciseAddDetail/>} />
          <Route path="/Exercise/routine/:id/play" element={<ExercisePlay/>} />
          <Route path="/Exercise/routine/:id/edit" element={<ExerciseEdit/>} />
          <Route path="/Exercise/routine/:id/complete" element={<ExerciseComplete/>} />
          <Route path="/Exercise/write" element={<ExerciseWrite/>} />

          <Route path="/Mypage" element={<Mypage/>} />

          <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
