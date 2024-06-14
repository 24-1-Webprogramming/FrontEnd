import React from 'react';
import AddressSettingPage from './AddressSettingPage';

export default {
  title: 'AddressSettingPage',
  component: AddressSettingPage,
};

const Template = (args) => <AddressSettingPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
