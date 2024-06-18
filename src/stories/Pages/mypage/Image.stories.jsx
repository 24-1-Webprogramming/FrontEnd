import React from 'react';
import Image from './Image';

const meta = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    showLoader: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '이미지 컴포넌트는 이미지를 로드할 때 로딩 스피너를 표시하며, 클릭 이벤트를 처리할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '../../DumbbellDefault.svg',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  showLoader: true,
};
Default.parameters = {
  docs: {
    storyDescription: '기본 이미지 컴포넌트로, 로딩 스피너가 표시됩니다.',
  },
};

export const WithoutLoader = Template.bind({});
WithoutLoader.args = {
  src: '../../DumbbellDefault.svg',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  showLoader: false,
};
WithoutLoader.parameters = {
  docs: {
    storyDescription: '로딩 스피너가 없는 이미지 컴포넌트입니다.',
  },
};

export const ClickableImage = Template.bind({});
ClickableImage.args = {
  src: '../../DumbbellDefault.svg',
  alt: 'Clickable Image',
  width: '150px',
  height: '150px',
  showLoader: true,
  onClick: () => alert('Image clicked!'),
};
ClickableImage.parameters = {
  docs: {
    storyDescription: '클릭 이벤트를 처리하는 이미지 컴포넌트입니다.',
  },
};
