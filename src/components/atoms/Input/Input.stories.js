import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Input from './Input'

storiesOf('atoms/Input', module)
  .add('Input', () => (
    <Input
      value={text('Value', 'Value')}
      onChange={action('Change')}
    />
  ))