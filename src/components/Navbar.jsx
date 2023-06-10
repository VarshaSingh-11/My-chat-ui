import React from 'react'
const Navbar = () => {
    return(
        <div className='navbar'>
            <span className='logo'>Axon Chat</span>
            <div className='user'>
                <img src="https://images.pexels.com/photos/17041991/pexels-photo-17041991/free-photo-of-model-in-summer-dress-and-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                
                <span>Varsha</span>
                <button>logout</button>
            </div>
        </div>
    )
}
export default Navbar;