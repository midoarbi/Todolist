import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItems/AddItems';

class App extends Component {
  state = {
    items : [                                           // 1-create state
      {id:1, name:'hamza', age:30 },
      {id:2, name:'mehdi', age:26 },
      {id:3, name:'karim', age:34 }
    ]
  }

  componentDidMount()
  {
  try{
    const json = localStorage.getItem('items');
    const items = JSON.parse(json);

    if(items)
    {
      this.setState(() => ({items}))
    }
  }
  catch(e)
  {

  }
  }

  componentDidUpdate(prevProps, Prevstate)
  {
    if(Prevstate.items.length !== this.state.length)   //state from add state parametres
    {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem('items', json);
    }
  }

  deleteItem =(id) =>{
  let items = this.state.items.filter(item =>{
    return item.id !== id
  })
  this.setState({items});
  }

  addItem = (item) =>{
      item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="App container">  
      <h1 className="text-center">List Items</h1>                                       
       <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>          
       <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
