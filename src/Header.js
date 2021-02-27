import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
function Header() {
    return (
        <div className='header'>
            <h1></h1>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1614417530~hmac=8993d58cb66c325402997d0158282220" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>

                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title ='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon}title='My Network'/>


            </div>
        </div>
    )
}

export default Header
