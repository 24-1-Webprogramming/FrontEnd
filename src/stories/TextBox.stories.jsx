import React from 'react';
import TextBox from './TextBox';

export default {
  title: 'Components/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
  },
};

const Template = (args) => <TextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  maxLength: 100,
};
