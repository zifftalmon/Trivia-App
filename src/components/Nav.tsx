import React from 'react'
import {Link} from 'react-router-dom'

const Nav:React.FC  = () => {
    return(
        <div className='nav'>
            <h1><Link style={{textDecoration:'none', color:'black'}} to='/'>Trivia</Link></h1>
            <div>
                <ul>
                    <li>Today's Picks</li>
                    <li><Link style={{textDecoration:'none', color:'black'}} to='/trivias'>Our Trivias</Link></li>
                    <li>Create Your Own Trivia</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Nav