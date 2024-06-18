import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import OnboardingPage from './stories/OnBoardingPage';
import ProfileSetupPage from './stories/ProfileSetupPage';
import SurveyStartPage from './stories/SurveyStartPage';
import SurveyPage from './stories/SurveyPage';
import MyPageProfileEdit from './stories/MyPageProfileEdit';
import MypageLeave from './stories/MypageLeave';
import MyPageCondition from './stories/MyPageConditions';
import AddressSettingPage from './stories/AddressSettingPage';
// import GymInfoPage from './GymInfoPage';
import MyPageProfileEditPage from './stories/MyPageProfileEditPage'; // import MyPageProfileEditPage
// import Home_DDayAdd from './Home_DDayAdd';
// import Home_Scrolldown from './Home_Scrolldown';
// import GymDetailPage from './GymDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/profile-setup" element={<ProfileSetupPage />} />
        <Route path="/survey-start" element={<SurveyStartPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/mypage-edit" element={<MyPageProfileEdit />} />
        <Route path="/mypage-leave" element={<MypageLeave />} />
        <Route path="/mypage-conditions" element={<MyPageCondition />} />
        <Route path="/address-setting" element={<AddressSettingPage />} />
        <Route path="/" element={<AddressSettingPage />} />
        {/* <Route path="/gym/:gymId" element={<GymDetailPage />} />
        <Route path="/mypage-profile-edit-page" element={<MyPageProfileEditPage />} /> Add new route */}
      </Routes>
    </Router>
  );
};

export default App;