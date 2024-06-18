import React from 'react';
import AddressSettingPage from './AddressSettingPage';

export default {
  title: 'Pages/AddressSettingPage',
  component: AddressSettingPage,
};

const Template = (args) => <AddressSettingPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // 여기에 필요한 기본 props를 추가하세요
};