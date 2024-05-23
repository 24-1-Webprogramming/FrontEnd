import React from 'react';
import ProgressBar from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: { control: 'range', min: 0, max: 100, step: 1},
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
};
Default.parameters = {
  docs: {
    storyDescription: '기본 프로그레스 바 컴포넌트입니다.',
  },
};
