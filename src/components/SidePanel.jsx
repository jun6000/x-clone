import "../styles/SidePanel.css";
import Icons from "./Icons";
import { useState } from 'react';

export default function SidePanel({ pfp }) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="sidePanel">
            <div className="navMembers">
                <div className="logo">
                    <img src={Icons.xLogo} />
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.home} />
                    Home
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.explore} />
                    Explore
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.notifications} />
                    Notifications
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.messages} />
                    Messages
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.lists} />
                    Lists
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.bookmarks} />
                    Bookmarks
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.communities} />
                    Communities
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.verified} />
                    Verified
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.profile} />
                    Profile
                </div>
                <div className="navMember">
                    <img className="navIcon" src={Icons.more} />
                    More
                </div>
            </div>
            <button className="postButton">Post</button>
            <div className="accountButton" onClick={togglePopup} >
                <img className="userPfp" src={pfp} />
                <div className="userDetails">
                    <div className="userName">Username</div>
                    <div className="userHandle">@userhandle</div>
                </div>
                <div className="accountOptions">⋯</div>
            </div>
            {showPopup && (
                <div className="accountPopup">
                    <div>Add an existing account</div>
                    <div>Log out @userhandle</div>
                </div>
            )}
        </div>
    );
}
