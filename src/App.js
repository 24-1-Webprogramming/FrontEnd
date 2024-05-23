// App.js 또는 라우팅을 관리하는 파일에서
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OnboardingPage from './stories/OnBoardingPage';
import ProfileSetupPage from './ProfileSetupPage';
import SurveyStartPage from './SurveyStartPage';

const App = () => {
  return (
    <Router>
        {/* 페이지 라우팅 */}
        <Switch>
          {/* 프로필 설정 페이지 */}
          <Route path="/" component={OnboardingPage} exact />
          <Route path="/profile-setup" component={ProfileSetupPage} />
          <Route path="/survey-start" component={SurveyStartPage} />
          <Route path="/page1" component={Page1} />
        </Switch>
    </Router>
  );
};

export default App;
