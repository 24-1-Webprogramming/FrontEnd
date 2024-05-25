import React from 'react';
import CircularProgressBar from './CircularProgressBar';

export default {
  title: 'Components/CircularProgressBar',
  component: CircularProgressBar,
  tags: ['autodocs'],
};

const Template = (args) => <CircularProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalSteps: 100,
  currentStep: 50,
  radius: 50,
  strokeWidth: 8,
  showPercentage: true,
  showCustomText: true,
  customText: '이번주 목표',
};
