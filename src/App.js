import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Routes와 Route 추가
import './index.css'
import Splash from './stories/Onboarding/Splash';
import ProfileSetupPage from './stories/ProfileSetupPage';
import SurveyStartPage from './stories/SurveyStartPage';
import SurveyPage from './stories/SurveyPage';

const App = () => {
  return (
    <Router>
        <Routes> {/* Routes로 변경 */}
          {/* 프로필 설정 페이지 */}
          <Route path="/" element={<Splash />} exact /> {/* element 속성 추가 */}
          <Route path="/profile-setup" element={<ProfileSetupPage />} /> {/* element 속성 추가 */}
          <Route path="/survey-start" element={<SurveyStartPage />} /> {/* element 속성 추가 */}
          <Route path="/survey" element={<SurveyPage />} /> {/* element 속성 추가 */}
        </Routes> {/* 닫는 태그 추가 */}
    </Router>
  );
};

export default App;
