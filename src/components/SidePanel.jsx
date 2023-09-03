import "../styles/SidePanel.css";
import pfp from "../assets/userPfp.jpeg";

export default function SidePanel() {
    return (
        <div className="sidePanel">
            <div className="navMembers">
                <div className="logo">𝕏</div>
                <div className="navMember"><span className="navSymbol"></span>Notifications</div>
                <div className="navMember"><span className="navSymbol"></span>Messages</div>
                <div className="navMember"><span className="navSymbol"></span>Lists</div>
                <div className="navMember"><span className="navSymbol"></span>Bookmarks</div>
                <div className="navMember"><span className="navSymbol"></span>Communities</div>
                <div className="navMember"><span className="navSymbol"></span>Verified</div>
                <div className="navMember"><span className="navSymbol"></span>Profile</div>
                <div className="navMember"><span className="navSymbol"></span>More</div>
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
