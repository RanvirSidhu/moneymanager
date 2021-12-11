import React from "react";
import Nav from "../Nav/Nav.js";
import './Register.css';
import {useNavigate } from "react-router-dom"

class Register extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            email:'',
            pswd:'',
            dob:'',
            bank:'',
            salary:0,
            phno:0,
            ac_type:'',
            details:false
        }
    }
    namechange = (event) => {
        this.setState({name:event.target.value})
    }
    emailchange = (event) => {
        this.setState({email:event.target.value})
    }
    pswdchange = (event) => {
        this.setState({pswd:event.target.value})
    }
    dobchange = (event) => {
        this.setState({dob:event.target.value})
    }
    bankchange = (event) => {
        this.setState({bank:event.target.value})
    }
    salarychange = (event) => {
        this.setState({salary:event.target.value})
    }
    phnochange = (event) => {
        this.setState({phno:event.target.value})
    }
    acchange = (event) => {
        this.setState({ac_type:event.target.value})
    }

    changedisp = () => {
        if(this.state.name!='' && this.state.email!='' && this.state.pswd!='' && this.state.pswd.length<6)
        {
            this.setState({details:true})
            this.name.value="";
            this.email.value = "";
            this.pswd.value="";
        }else
        {
            alert('Please Enter Name,Valid Email, & Valid password');
        }
    }

    display = (dis) => {
        if(dis!==true)
           return (
                <div>
                   <div className='sub-form'>
                    <div className='frms'>
                        <div className='labels'>
                            <label for='name'>Enter Name</label>
                            <input id='name' type='text' className='inputs fbl' onChange={this.namechange} ref={(el) => (this.name=el)} />
                        </div>
                        <div className='labels'> 
                            <label for='email' >Enter Email</label>
                            <input id='email' type='email' className='inputs fbl' onChange={this.emailchange} ref={(el) =>(this.email=el)}/>
                        </div>
                        <div className='labels'> 
                            <label for='pswd' >Enter Password</label>
                            <input id='pswd' type='password' className='inputs fbl' onChange={this.pswdchange} ref={(el) =>(this.pswd=el)}/>
                        </div>
                    </div>
                    <div className='frms'>
                        <div id='dates' className='labels'>
                            <label>Enter Date of Birth</label>
                            <input type='date' className='date' onChange={this.dobchange}/>
                        </div>
                        <div className='labels'> 
                            <label for='phno' >Enter Phone Number</label>
                            <input id='phno' type='tel' className='inputs fbl' placeholder='+91' onChange={this.phnochange}/>
                        </div>
                    </div>
                    </div>
                    <div className='flexs'>
                        <button  className='butns fbl' onClick={this.changedisp}>Next</button>
                    </div>
                </div>
           )
        else
        {
            return(
                <div>
                    <div className='sub-form'>
                    <div className='frms'>
                        <div className='labels'>
                            <label for='bank'>Enter Bank</label>
                            <input id='bank' type='text' className='inputs fbl' onChange={this.bankchange}/>
                        </div>
                        <div className='labels'> 
                            <label for='salary' >Enter Monthly Salary</label>
                            <input id='salary' type='number' className='inputs fbl' placeholder='in Rs' onChange={this.salarychange}/>
                        </div>
                        <div className='labels'> 
                            <label for='b-type' >Enter Account Type</label>
                            <select id='b-type' className='inputs fbl pop-sel' onChange={this.acchange}>
                                <option value='current'>Current</option>
                                <option value='savings'>Savings</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <div className='flexs'>
                        <button  className='butns fbl' onClick={this.register}>Register</button>
                    </div>
                </div>
            )
        }
    }

    register = () => {
        fetch("http://localhost:3000/register",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password:this.state.pswd,
                dob:this.state.dob,
                phno:this.state.phno,
                bank:this.state.bank,
                salary:this.state.salary,
                acc:this.state.ac_type
            })
            }).then(resp => resp.json()).then(user => {
                if(user.name!=='')
                {
                    this.props.loaduser(user);
                    console.log(user);
                    this.props.navigate('/dashboard');
                }
            })
    }

    render() {
        return(
            <div id='register'>
            <Nav page='Signin'/>
            <div id='register-main' className='flexs'>
                <div id='reg-form'>
                    <h2 className='form-heading'>Register</h2>
                    {
                        this.display(this.state.details)
                    }
                    
                </div>
            </div>
            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Register {...props} navigate={navigate} />
}

export default WithNavigate;