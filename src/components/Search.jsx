import React from 'react'
import '../style.scss'; 
const Search = () => {
    return(
        <div className='search'>
            <div className='searchForm'>
                <input type="text" placeholder='Find a user'/>

            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/10106827/pexels-photo-10106827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
           <div className='userChatInfo'>
            <span>Archeon</span>
           </div>
            </div>
        </div>
    )
}
export default Search;