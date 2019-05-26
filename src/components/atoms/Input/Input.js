import React, { Component } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

class Input extends Component {
  handleChange (e) {
    const { onChange } = this.props

    if (onChange) onChange(e)
  }

  handleKeyDown (e) {
    const { onEnter } = this.props

    if (e.key === 'Enter') {
      if (onEnter) {
        onEnter(e)
      }
    }
  }

  render () {
    const {
      value
    } = this.props

    return (
      <input
        className={clsx(
          'input',
          'outline-none',
          'px-4',
          'py-2',
          'border',
          'border-gray-700',
          'focus:border-blue-500'
        )}
        value={value}
        onKeyDown={(e) => this.handleKeyDown(e)}
        onChange={(e) => this.handleChange(e)}
      />
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default Input