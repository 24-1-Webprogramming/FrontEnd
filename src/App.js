// App.js 또는 라우팅을 관리하는 파일에서
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProfileSetupPage from './ProfileSetupPage';

const App = () => {
  return (
    <Router>
        {/* 페이지 라우팅 */}
        <Switch>
          {/* 프로필 설정 페이지 */}
          <Route path="/profile-setup" component={ProfileSetupPage} />
          <Rouet path="/survey-start" component={SurveyStartPage} />
        </Switch>
    </Router>
  );
};

export default App;
