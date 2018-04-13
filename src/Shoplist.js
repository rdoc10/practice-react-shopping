import React, { Component } from 'react';
import removeIcon from './close.png'
import addIcon from './add.png'

class Shoplist extends Component{

  //state = {values: {"Item name": "", "Quantity": 0, "Price": 0}}
 state = {
    Item: '',
    id: 1,
    Quantity: 0,
    Price: 0,
    query: ''
  }

  updateValues = (value,type) => {
    if(type === 'name' || type ==='quant' || type==='price'){
      this.setState({
        values: {
          ...this.state.values,
          [type]:value
        }
      })
    }
  }

  render(){

    return (
      <div className='conatiner'>
      <div><h1>Get Items: </h1></div>

        <p>Item Name:<br/><input className='Name' type='text' id='iname'
              value= {this.state.name} //value= {this.state.values.name}
             onChange= {(e) => this.updateValues(e.target.value,'name')}/></p>

        <p>Quantity:<br/> <input className='Quant' id='iquant'
             type='number' value= {this.state.quant} //value= {this.state.values.quant}
             onChange={ (e) => this.updateValues(e.target.value,'quant')}/></p>

        <p>Price/item:<br/><input className='Price' type='number' id='iprice' value= {this.state.price}
        //value= {this.state.values.price}
            onChange={ (e) => this.updateValues(e.target.value,'price')}/></p>

            <div className='add-button'>
              <p>
              <img src={addIcon} alt="add" width={25} height={25} onClick={()=>this.props.onAddItem(this.state.values)}/>
              </p>
            </div>

            <div className='cart'>
            <h1>Cart:</h1>

            <ul className='items'>
              {this.props.list.map((item) => (
              <li className='list' key={item.id}>
              Name of item: {item.name} <br/>
              quantity of item: {item.quant} <br/>
              Total price: {item.price * item.quant}
              <p><img src={removeIcon} alt="delete" width={25} height={25} onClick={()=>this.props.onDeleteItem(item)}/></p>
              </li>
            ))}
            </ul>

            </div>

      </div>
    )
  }
}              /*<span className='remove-button'>
              <button className='remove' onClick={()=> props.onDeleteItem(item)}>remove</button>*/

export default Shoplist;
