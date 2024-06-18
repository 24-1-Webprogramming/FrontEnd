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
    background: { control: 'text' }, // Add control for background
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
  color: 'black',
  shadow: true,
  children: 'This is a card',
};

export const NoShadow = Template.bind({});
NoShadow.args = {
  width: '300px',
  height: '200px',
  borderRadius: '16px',
  background: '#495EF6', // Change background to '#f0f0f0'
  color: 'white',
  shadow: false,
  children: 'This card has no shadow',
};

export const WithLinearBackground = Template.bind({}); // New story
WithLinearBackground.args = {
  width: '300px',
  height: '200px',
  borderRadius: '16px',
  background: 'linear-gradient(to right, #FFA17F, #00223E)', // Apply linear gradient
  color: '#fff',
  shadow: true,
  children: 'This card has a linear background',
};
