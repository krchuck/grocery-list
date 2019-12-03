import React from 'react'

class ItemForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({ name: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
          required 
          placeholder="Add An Item" 
        />
      </form>
    )
  }
}

export default ItemForm