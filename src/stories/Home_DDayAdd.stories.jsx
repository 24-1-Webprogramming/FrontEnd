// src/stories/Home_DDayAdd.stories.jsx
import React from 'react';
import Home_DDayAdd from './Home_DDayAdd';

export default {
  title: 'Home/Home_DDayAdd',
  component: Home_DDayAdd,
};

const Template = (args) => <Home_DDayAdd {...args} />;

export const Default = Template.bind({});
Default.args = {
  continuousExerciseDays: 0,
  progressBarsData: [
    { totalSteps: 30, currentStep: 0, color: '#495EF6' },
    { totalSteps: 30, currentStep: 15, color: '#72BBFF' },
  ],
};