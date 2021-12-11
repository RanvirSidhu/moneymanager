import React from "react";
import './Expl.css'
import { Link } from "react-router-dom";

function Expl(props) {
    return(
        <div className='expl-div'>
            <ul className='expl-list'>
            {
                props.list.map(item => {
                    return <Link className='links' to={`/${item.toLowerCase()}`}><li className='butn bb ma0 pa3 b--white' key={item}>{item}</li></Link>
                })
            }
                <div className='bottom'>
                    <li className='butn bt ma0 pa3 b--white'>Settings</li>
                    <li className='butn bt ma0 pa3 b--white'>Sign Out</li>
                </div>
            </ul>
        </div>
    )
}

export default Expl;