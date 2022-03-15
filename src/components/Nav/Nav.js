import React from "react";
import "./Nav.css";
import {Link} from 'react-router-dom'

function Nav(props)
{
    const check = (page) => {
        if(page==='home')
        {
            return (
                <div className='right flexs'>
                <Link className='links' to={'/signin'}><li className='sub'>Sign in</li></Link>
                <Link className='links' to={'/register'}><li className='sub'>Register</li></Link>
                </div>
            )
        }
        else
        {
            return (
                <div className='right flexs'> <li className='sub'>{props.user}</li> </div>
            )
        }
    }

    return(
        <div className='nav border-box'>
            <ul className='nav-list'>
                <li className='sub'>
                    Money Manager
                </li>
                {check(props.page)}
            </ul>
        </div>
    )
}

export default Nav;