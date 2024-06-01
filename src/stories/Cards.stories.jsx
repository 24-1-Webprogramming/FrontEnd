import React from 'react';
import Cards from './Cards';

export default {
  title: 'Components/Cards',
  component: Cards,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const data = [
  {
    width: '600px',
    height: '200px',
    borderRadius: '16px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    shadow: false,
    children: 'Card 1',
  },
  {
    width: '400px',
    height: '200px',
    borderRadius: '16px',
    backgroundColor: '#f0f050',
    color: '#333',
    shadow: false,
    children: 'Card 2',
  },
  {
    width: '400px',
    height: '200px',
    borderRadius: '16px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    shadow: false,
    children: 'Card 3',
  },
  // 추가적인 카드 데이터를 필요에 따라 추가할 수 있습니다.
];

export const HorizontalScrollableCards = () => <Cards data={data} />;
