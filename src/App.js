import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { Component } from 'react';

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       showModol:false
    }
  }

  handleShow = () =>{
    this.setState({
      showModol:true
    })
  }

  handleHide = () =>{
    this.setState({
      showModol: false
    })
  }
   

  render(){

    const modal = this.state.showModol ? (<Modal close={this.handleHide}/>) : null;
    return (
      <div className="App">
          <button onClick={this.handleShow}>Afficher le Modal</button>
          {modal}
      </div>
    );
  }
  
}

export default App;
