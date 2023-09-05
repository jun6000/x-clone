import "../styles/SidePanel.css";
import Icons from "./Icons";

export default function SidePanel({ pfp }) {
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
            <div className="accountButton">
                <img className="userPfp" src={pfp} />
                <div className="userName">Username</div>
                <div className="userHandle">@userhandle</div>
                <div className="accountOptions">⋯</div>
            </div>
        </div>
    );
}
