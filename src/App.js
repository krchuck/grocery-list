import React, { Component} from 'react'
import List from './List'
import ItemForm from './ItemForm'
import Footer from './Footer'


class App extends React.Component {
  state = { items: [], filter: 'All' }
  
  visibleItems = () => {
    const { items, filter } = this.state
    switch(filter) {
      case 'Active':
        return items.filter( t => !t.complete )
      case 'Complete':
        return items.filter( t=> t.complete )
      default:
        return items;
    }
  }
  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  handleClick = (id) => {
    const {items} = this.state;
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  addItem = (name) => {
    const { items } = this.state;
    const item = { name, id: this.getUniqId() , complete: false}
    this.setState({ items: [item, ...items]
    })
  }
  
  render() {
    const { items, filter } = this.state;
    return (
      <div>
        <ItemForm addItem={this.addItem}/>
        <List name="Item list" items={this.visibleItems()} itemClick={this.handleClick}
         />
         <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
    }
  }

  export default App;
