import React from 'react';
import ProgressBar from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    totalSteps: { control: 'number' }, 
    currentStep: { control: 'number' },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <ProgressBar {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  totalSteps: 7,
  currentStep: 3,
  direction: 'horizontal',
  width: '100%',
  height: '8px',
};
Horizontal.parameters = {
  docs: {
    storyDescription: '가로 방향의 프로그레스 바 컴포넌트입니다.',
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  totalSteps: 7,
  currentStep: 3,
  direction: 'vertical',
  width: '8px',
  height: '250px',
};
Vertical.parameters = {
  docs: {
    storyDescription: '세로 방향의 프로그레스 바 컴포넌트입니다.',
  },
};