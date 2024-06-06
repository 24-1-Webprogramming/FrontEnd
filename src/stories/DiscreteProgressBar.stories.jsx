import React from 'react';
import DiscreteProgressBar from './DiscreteProgressBar';

const meta = {
  title: 'Components/DiscreteProgressBar',
  component: DiscreteProgressBar,
  argTypes: {
    totalSteps: { control: 'number' },
    currentStep: { control: 'number' },
    width: { control: 'text' },
    height: { control: 'text' },
    gap: { control: 'number' }, // gap props를 컨트롤할 수 있도록 추가
  },
  parameters: {
    docs: {
      description: {
        component: 'DiscreteProgressBar 컴포넌트는 단계별로 나눠진 진행 바를 보여줍니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <DiscreteProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalSteps: 5,
  currentStep: 3,
  width: '100%',
  height: '4px',
  gap: 3, // gap props의 기본값 설정
};
