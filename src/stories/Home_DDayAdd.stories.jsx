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
  continuousExerciseDays: 5,
  progressBarsData: [
    { totalSteps: 10, currentStep: 3, color: '#4CAF50' },
  ],
  characterMessage: '작디작은 1kg 아령',
};