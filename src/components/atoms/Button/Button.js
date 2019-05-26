import React, { Component } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

class Button extends Component {
  handleClick (e) {
    const { onClick } = this.props

    if (onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  render () {
    const {
      href,
      children,
      isSecondary,
      isDisabled
    } = this.props

    return (
      <a
        className={clsx(
          {
            'bg-green-600 border-green-600 lg:hover:bg-green-500': !isSecondary && !isDisabled,
            'bg-red-600 border-red-600 lg:hover:bg-red-500': isSecondary,
            'bg-gray-300 border-gray-300  pointer-events-none': isDisabled
          },
          'inline-flex',
          'px-4',
          'py-2',
          'border',
          'text-white',
          'transition'
        )}
        href={href}
        onClick={e => this.handleClick(e)}
      >{children}</a>
    )
  }
}

Button.defaultProps = {
  children: 'Button',
  href: '#'
}

Button.propTypes = {
  isSecondary: PropTypes.bool,
  isDisabled: PropTypes.bool
}

export default Button