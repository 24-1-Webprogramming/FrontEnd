// .storybook/preview.js
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';



// After
import { fn } from '@storybook/test';  // Ensure to import 'fn'

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ width: '393px', height: '852px', overflow: 'auto', border: '1px solid #ddd' }}>
        <Story />
      </div>
    </MemoryRouter>
  ),
];
