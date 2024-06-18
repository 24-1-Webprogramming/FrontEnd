import React from 'react';
import TextField from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
    showCharCount: { control: 'boolean' },
    allowedCharsType: { 
      control: 'select',
      options: ['alphanumeric', 'numeric', 'numericWithDecimal', 'alphabetic', '']
    },
    customText: { control: 'text' },
    width: { control: 'text' },  // 너비 조절을 위한 컨트롤 추가
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '10글자 이내로 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: '',
  width: '321px',  // 기본 너비 설정
};

export const WithoutCharCount = Template.bind({});
WithoutCharCount.args = {
  placeholder: '10글자 이내로 입력해주세요',
  maxLength: 10,
  showCharCount: false,
  allowedCharsType: '',
  width: '321px',
};

export const OnlyAlphaNumeric = Template.bind({});
OnlyAlphaNumeric.args = {
  placeholder: '영문과 숫자만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'alphanumeric',
  width: '321px',
};

export const OnlyNumericWithDecimal = Template.bind({});
OnlyNumericWithDecimal.args = {
  placeholder: '숫자와 소수점만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'numericWithDecimal',
  width: '321px',
};

export const OnlyNumeric = Template.bind({});
OnlyNumeric.args = {
  placeholder: '숫자만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'numeric',
  width: '321px',
};

export const OnlyAlphabetic = Template.bind({});
OnlyAlphabetic.args = {
  placeholder: '영문자만 입력해주세요',
  maxLength: 10,
  showCharCount: true,
  allowedCharsType: 'alphabetic',
  width: '321px',
};
