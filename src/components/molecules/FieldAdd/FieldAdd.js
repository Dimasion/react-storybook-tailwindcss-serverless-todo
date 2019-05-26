import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import clsx from 'clsx';

class FieldAdd extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleAdd () {
    const { onAdd } = this.props
    const { value } = this.state

    if (onAdd && value.length > 0) {
      this.setState({
        value: ''
      })

      onAdd(this.state.value)
    }
  }

  render () {
    return (
      <div
        className={clsx(
          'flex'
        )}
      >
        <Input
          onChange={(e) => this.handleChange(e)}
          onEnter={() => this.handleAdd()}
          value={this.state.value}
        />
        <Button
          onClick={() => this.handleAdd()}
          isDisabled={this.state.value.length === 0}
        >Add</Button>
      </div>
    )
  }
}

FieldAdd.propTypes = {

}

export default FieldAdd