// src/stories/AddressItem.stories.jsx
import AddressItem from './AddressItem';

export default {
  title: 'Components/AddressItem',
  component: AddressItem,
  tags: ['autodocs'],  // CSF3 형식 사용
};

const Template = (args) => <AddressItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '상도 BBGYM',
  address: '서울 동작구 상도로 95 2층',
};