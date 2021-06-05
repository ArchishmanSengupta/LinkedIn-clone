import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    const recentItems =(topic)=>(
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4E16AQFnsGBq4vQ2eA/profile-displaybackgroundimage-shrink_350_1400/0/1611828992429?e=1620259200&v=beta&t=KZD7I42aXLsWHpFl62vuqNUxlHu_xPoI7tP2DhEIh8c" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>
                    Arghya Pahar
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
                <p className="sidebar__statNumber">9,256</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('Software Engineering')}
                {recentItems('Design')}
                {recentItems('Developer')}
            </div>
        </div>
    );
}

export default Sidebar
