import React from 'react';
import Graph from './Graph';

export default {
  title: 'Components/Graph',
  component: Graph,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'array' },
    width: { control: 'number' },
    height: { control: 'number' },
    color: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Graph {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [10, 20, 15, 250, 30, 200, 10],
  width: 400,
  height: 200,
  color: '#5467F5',
  selectedIndex: 6,
};

export const CustomGraph = Template.bind({});
CustomGraph.args = {
  data: [5, 10, 8, 12, 15, 10, 5],
  width: 500,
  height: 300,
  color: 'blue',
};
