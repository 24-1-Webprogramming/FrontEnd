import React from 'react';
import ImageComponent from './ImageComponent';

const meta = {
  title: 'Components/ImageComponent',
  component: ImageComponent,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    showLoader: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: '이미지 컴포넌트는 이미지를 로드할 때 로딩 스피너를 표시하며, 클릭 이벤트를 처리할 수 있습니다.',
      },
    },
  },
};

export default meta;

const Template = (args) => <ImageComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  showLoader: true,
};

export const WithoutLoader = Template.bind({});
WithoutLoader.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  showLoader: false,
};

export const ClickableImage = Template.bind({});
ClickableImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Clickable Image',
  width: '150px',
  height: '150px',
  showLoader: true,
  onClick: () => alert('Image clicked!'),
};
