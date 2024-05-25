import React from 'react';
import TextBox from './TextBox';

const meta = {
  title: 'Components/TextBox',
  component: TextBox,
  argTypes: {
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
    showCharCount: { control: 'boolean' },
    allowedCharsType: { 
      control: 'select',
      options: ['alphanumeric', 'numeric', 'numericWithDecimal', 'alphabetic', '']
    },
    customText: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <TextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '10글자 이내로 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: '',
};

export const WithoutCharCount = Template.bind({});
WithoutCharCount.args = {
  placeholder: '10글자 이내로 입력해주세요',
  maxLength: 10,
  showCharCount: false,
  allowedCharsType: '',
};

export const OnlyAlphaNumeric = Template.bind({});
OnlyAlphaNumeric.args = {
  placeholder: '영문과 숫자만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'alphanumeric',
};

export const OnlyNumericWithDecimal = Template.bind({});
OnlyNumericWithDecimal.args = {
  placeholder: '숫자와 소수점만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'numericWithDecimal',
};

export const OnlyNumeric = Template.bind({});
OnlyNumeric.args = {
  placeholder: '숫자만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'numeric',
};

export const OnlyAlphabetic = Template.bind({});
OnlyAlphabetic.args = {
  placeholder: '영문자만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'alphabetic',
};
