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

export const Expressions = () => {
  const iconStyle = {
    display: 'flex',
    marginRight: '30px', // 아이콘 사이의 간격 조절
  };

  const icons = [
    { src: '/FaceIcons/Blue20.svg', width: '48px', height: '67px', text: '퉤퉤', disabled: true, textsize: '10px', textcolor: 'black'},  
    { src: '/FaceIcons/Blue40.svg', text: '맛있..나?', disabled: true},
    { src: '/FaceIcons/Blue60.svg', text: '맛있다', disabled: true},
    { src: '/FaceIcons/Blue80.svg', text: '맛도리', disabled: true},
    { src: '/FaceIcons/Blue100.svg', text: '짱맛도리', disabled: true},
    { src: '/FaceIcons/Gray20.svg', text: '퉤퉤', disabled: true},
    { src: '/FaceIcons/Gray40.svg', text: '맛있..나?', disabled: true},
    { src: '/FaceIcons/Gray60.svg', text: '맛있다', disabled: true},
    { src: '/FaceIcons/Gray80.svg', text: '맛도리', disabled: true},
    { src: '/FaceIcons/Gray100.svg', text: '짱맛도리', disabled: true},
  ];

  const topIcons = icons.slice(0, 5); // 상단 아이콘들
  const bottomIcons = icons.slice(5); // 하단 아이콘들

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {topIcons.map((icon, index) => (
          <IconButton key={index} style={index === topIcons.length - 1 ? {} : iconStyle} {...icon} />
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        {bottomIcons.map((icon, index) => (
          <IconButton key={index + 5} style={index === bottomIcons.length - 1 ? {} : iconStyle} {...icon} />
        ))}
      </div>
    </div>
  );
};

