import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};


// After
import { fn } from '@storybook/test';  // Ensure to import 'fn'

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];
