import React from 'react';
import CheckBox from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    checked: { control: 'boolean' },
    type: { control: 'radio', options: ['star', 'square'] },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <CheckBox {...args} />;

export const StarChecked = Template.bind({});
StarChecked.args = {
  checked: true,
  type: 'star',
};

export const StarUnchecked = Template.bind({});
StarUnchecked.args = {
  checked: false,
  type: 'star',
};

export const SquareChecked = Template.bind({});
SquareChecked.args = {
  checked: true,
  type: 'square',
};

export const SquareUnchecked = Template.bind({});
SquareUnchecked.args = {
  checked: false,
  type: 'square',
};