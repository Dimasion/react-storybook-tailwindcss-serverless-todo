import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import FieldAdd from './FieldAdd'

storiesOf('molecules', module)
  .add('FieldAdd', () => (
    <FieldAdd
      onAdd={action('On add')}
    />
  ))