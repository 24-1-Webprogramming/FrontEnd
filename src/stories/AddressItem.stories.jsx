import React from 'react';
import AddressItem from './AddressItem';

export default {
  title: 'AddressItem',
  component: AddressItem,
};

const Template = (args) => <AddressItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '상도 BBGYM',
  address: '서울 동작구 상도로 95 2층',
};