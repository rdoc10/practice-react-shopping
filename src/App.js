import React, { Component } from 'react';
import './App.css';
import Shoplist from './Shoplist';

class App extends Component {state= {list:[]}

  deleteList = (item) => {
    this.setState((prevstate) => ({
      list: prevstate.list.filter((i) => i.name !== item.name) //i.id!==item.id
    }))
  }

  addList = (item) => {
    let joined = this.state.list.concat(item);
    this.setState({ list: joined })
    }

  render() {
    return (
      <div className="App">
        <Shoplist
          onAddItem={this.addList}
          onDeleteItem={this.deleteList}
          list={this.state.list} />
      </div>
    );
  }
}

export default App;
