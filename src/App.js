// App.js 또는 라우팅을 관리하는 파일에서
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import OnboardingPage from './stories/OnBoardingPage';
import ProfileSetupPage from './stories/ProfileSetupPage';
import SurveyStartPage from './stories/SurveyStartPage';

const App = () => {
  return (
    <Router>
        {/* 페이지 라우팅 */}
          {/* 프로필 설정 페이지 */}
          <Route path="/" component={OnboardingPage} exact />
          <Route path="/profile-setup" component={ProfileSetupPage} />
          <Route path="/survey-start" component={SurveyStartPage} />
    </Router>
  );
};

export default App;
