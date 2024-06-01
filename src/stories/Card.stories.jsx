import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    shadow: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: 'black',
  shadow: true,
  children: 'This is a card',
};

export const NoShadow = Template.bind({});
NoShadow.args = {
  width: '300px',
  height: '200px',
  borderRadius: '16px',
  backgroundColor: '#f0f0f0',
  color: '#333',
  shadow: false,
  children: 'This card has no shadow',
};
