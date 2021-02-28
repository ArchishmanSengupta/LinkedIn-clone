import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>
                    Archishman Sengupta
                </h2>
                <h4>archishman1808@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">6,621</p>
                </div>
                <div className="sidebar_stat">
                <p>Views of your post</p>
                <div className="sidebar__stat">9,256</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar
