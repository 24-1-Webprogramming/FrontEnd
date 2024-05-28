import React from 'react';
import IconButton from './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  docs: {
    description: {
      component: '아이콘 버튼 컴포넌트',
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <IconButton {...args} />;

export const Back = Template.bind({});
Back.args = {
  src: '/Icons/Icon_arrow.svg',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
};

export const Home = Template.bind({});
Home.args = {
  src: '/Icons/Icon_Home.svg',
  text: '홈',
  borderRadius: '0%',
  width: '40px',
  height: '40px',
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
  disabledIcon: '/Icons/Icon_Home_c.svg',
};

export const Excercise = Template.bind({});
Excercise.args = {
  src: '/Icons/Icon_exercise.svg',
  text: '운동',
  borderRadius: '0%',
  width: '40px',
  height: '40px',
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
  disabledIcon: '/Icons/Icon_exercise_c.svg',
};

export const Statistic = Template.bind({});
Statistic.args = {
  src: '/Icons/Icon_statistic.svg',
  text: '통계',
  borderRadius: '0%',
  width: '40px',
  height: '40px',
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
  disabledIcon: '/Icons/Icon_statistic_c.svg',
};

export const Group = Template.bind({});
Group.args = {
  src: '/Icons/Icon_group.svg',
  text: '그룹',
  borderRadius: '0%',
  width: '40px',
  height: '40px',
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
  disabledIcon: '/Icons/Icon_group_c.svg',
};

export const MyPage = Template.bind({});
MyPage.args = {
  src: '/Icons/Icon_mypage.svg',
  text: '마이페이지',
  borderRadius: '0%',
  width: '40px',
  height: '40px',
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
  disabledIcon: '/Icons/Icon_mypage_c.svg',
};