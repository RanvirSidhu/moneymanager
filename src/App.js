import React from 'react';
import Dash from './components/dash/Dash.js'
import Popup from "./components/popup/popup";
import Expenses from './components/Expenses/Expenses.js';
import Home from './components/Home/Home.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import Transactions from './components/Transactions/Transactions.js';
import './App.css';
import { BrowserRouter as Router, Routes ,Route, } from "react-router-dom";


class App extends React.Component {
  constructor(){
    super()
    this.state={
      payment:false,
      route:'home',
      user:{
        id:'',
        email:"",
        password:"",
        name:"",
        dob :"",
        phno:"",
        bank:"",
        salary:"",
        acc:""
      },
      newpay:false
    }
  }

  loaduser = (data) => {
    this.setState({user:{
      id:data.id,
      email:data.email,
      password:data.password,
      name:data.name,
      dob :data.dob,
      phno:data.phno,
      bank:data.bank,
      salary:data.salary,
      acc:data.acc
    }})
  }

  setnew = (data) => {
    this.setState({newpay:data})
  }

  openpay = (wind) => {
      this.setState({payment:wind});
      if(wind===true)
      {
        this.setnew(true);
      }
  }

  closepay = () => {
    this.setState({newpay:false});
  }
  
  render() {
    return(
      <Router>
      <div>
        <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path="/dashboard" element={<Dash openpay={this.openpay} user={this.state.user} newpay={this.state.newpay} closepay={this.state.closepay} setnew={this.setnew}/> }/>
        <Route path="/expenses" element={<Expenses user={this.state.user}/> }/>
        <Route path="/signin" element={<Signin loaduser={this.loaduser}/>} />
        <Route path="/register" element={<Register loaduser={this.loaduser}/>} />
        <Route path="/transactions" element={<Transactions user={this.state.user}/>} />
        </Routes>
        
      <Popup dia={this.state.payment} window={this.openpay} user={this.state.user}/>
      </div>
      </Router>
    )
  }
}

export default App;
