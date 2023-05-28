import React from 'react'
import {Link} from 'react-router-dom'

const Nav:React.FC  = () => {
    return(
        <div className='nav'>
            <h1>Trivia</h1>
            <div>
                <ul>
                    <li>Today's Pick</li>
                    <li>Our Trivias</li>
                    <li>Create Your Own Trivia</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Nav