import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('atoms/Button', module)
  .add('Button', () => (
    <Button />
  ))
  .add('Button Secondary', () => (
    <Button
      isSecondary
    />
  ))
  .add('Button Disabled', () => (
    <Button
      isDisabled
    />
  ))
