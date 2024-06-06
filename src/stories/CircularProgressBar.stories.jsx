import React from 'react';
import CircularProgressBar from './CircularProgressBar';
import { Description } from '@storybook/blocks';

export default {
  title: 'Components/CircularProgressBar',
  component: CircularProgressBar,
  parameters: {
    layout: 'centered',
  },
  Description: {
    component: 'CircularProgressBar 컴포넌트는 원형 프로그레스 바를 보여줍니다.',
  },
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
  Text: '이번주 목표',
};
