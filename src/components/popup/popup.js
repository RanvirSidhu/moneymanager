import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './popup.css';

class Popup extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      amount:0,
      date:0,
      category:'None'
    }
  }

  amountchange = (event) => {
    this.setState({amount:event.target.value});
  }

  datechange = (event) => {
    this.setState({date:event.target.value});
  }

  categorychange = (event) => {
    this.setState({category:event.target.value});
  }

  submitpayment = () => {
    console.log(this.props);
    this.props.window(false);
    fetch("http://localhost:3000/payment",{
      method:"post",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.props.user.id,
        amount:this.state.amount,
        category:this.state.category,
        date:this.state.date
      })
    }).then(resp => resp.json()).then(data => {console.log(data)})
  }

  render() 
  {
  return (
    <div>
      <Dialog
        open={this.props.dia}
        onClose={this.props.window}
        aria-labelledby="payment-form-title"
        aria-describedby="payment-form-description"
      >
        <DialogTitle id="payment-form-title">
          <h2>Add Expenses</h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="payment-form-description">
            <div>
              <form className='cash'>
              <div className='pop-inputs'>
                <label for='amount'>Enter Amount</label>
                <input type='text' id='amount' onChange={this.amountchange} placeholder='In Rs'/>
              </div>
              <div  className='pop-inputs'>
                <label >Category</label>
                <select onChange={this.categorychange} className='pop-sel'>
                  <option> Please Select One</option>
                  <option value='rent'>Rent</option>
                  <option value='bill'>Bill </option>
                  <option value='clothes'>Clothes</option>
                  <option value='transport'>Transport</option>
                  <option value='food'>Food</option>
                  <option value='others'>Others</option>
                </select>
              </div>
              <div  className='pop-inputs'>
                <label for='date'>Enter Date</label>
                <input type='date' id='date' onChange={this.datechange}/>
              </div>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.window(false)} className='pop-but'>Cancel</Button>
          <Button onClick={this.submitpayment} className='pop-but' autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
}

export default Popup;