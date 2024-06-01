import { ArgTypes } from '@storybook/blocks';
import { Switch } from './Switch';
import { parameters } from '../../.storybook/preview';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  ArgTypes: {
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default = {};