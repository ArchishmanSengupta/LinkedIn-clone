import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
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
                <HeaderOption Icon={HomeIcon} title ="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title ="Jobs"/>
                <HeaderOption Icon={ChatIcon} title ="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title ="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQENP7BiSXgosQ/profile-displayphoto-shrink_800_800/0/1611595766714?e=1620259200&v=beta&t=IesVmaQSErzHTwz7ODXOMxGuVPcqYS838eoeNJ3Wr_U" title='me'/>

            </div>
        </div>
    )
}

export default Header
