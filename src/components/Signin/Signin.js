import React from "react";
import Nav from "../Nav/Nav.js";
import './Signin.css';
import {Link,useNavigate } from "react-router-dom";

class Signin extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            pswd:''
        }
    }
    emailchange = (event) => {
        this.setState({email:event.target.value})
    }
    pswdchange = (event) => {
        this.setState({pswd:event.target.value})
    }
    
    submit = () => {
        console.log(this.state);
        fetch('http://localhost:3000/signin',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.pswd
            })
        }).then(resp=> resp.json())
        .then(user => {
            if(user.id)
            {
                this.props.loaduser(user);
                console.log(user);
                this.props.navigate('/dashboard');
            }
            else
            {
                window.alert('Email and Password do not match');
                this.email.value = "";
                this.pswd.value="";
            }
        })
        
        
        
    }

    render() {
        return(
            <div id='signin'>
            <Nav page='Signin'/>
            <div id='signin-main' className='flexs'>
                <div className='form'>
                    <h2 className='form-heading'>Sign In</h2>
                    <div className='labels'>
                        <label for='email'>Enter Email</label>
                        <input id='email' type='email' className='inputs fbl' onChange={this.emailchange} ref={(el) => (this.email=el)} />
                    </div>
                    <div className='labels'> 
                        <label for='password' >Enter password</label>
                        <input id='password' type='password' className='inputs fbl' onChange={this.pswdchange} ref={(el) =>(this.pswd=el)}/>
                    </div>
                    <div className='flexs'>
                        <button className='butns fbl' onClick={this.submit}>Submit</button>
                        <Link className='links' to={'/register'}><button  className='butns fbl'>Register</button></Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


function WithNavigate(props) {
    let navigate = useNavigate();
    return <Signin {...props} navigate={navigate} />
}

export default WithNavigate;
