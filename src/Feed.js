import React from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay"

import InputOption from './InputOption'
function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo"
                    color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video"
                    color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event"
                    color="#C0CBCD"/>
                    <InputOption Icon={CalenderViewDayIcon} title="Write Article"
                    color="#7FC15E"/>

                </div>
            </div>
        </div>
    )
}

export default Feed