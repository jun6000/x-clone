import "../styles/MainPanel.css";
import Icons from "./Icons";

export default function MainPanel({ pfp }) {
    return (
        <div className="mainPanel">
            <p className="header">Home</p>
            <div className="feedCategories">
                <div className="feedCategory">For you</div>
                <div className="feedCategory">Following</div>
            </div>
            <div className="createPost">
                <img className="userPfp" src={pfp} />
                <input className="writePost" placeholder="What is happening?!" />
            </div>
            <div className="postBar">
                <div className="postOptions">
                    <img src={Icons.media} />
                    <img src={Icons.gif} />
                    <img src={Icons.poll} />
                    <img src={Icons.emoji} />
                    <img src={Icons.schedule} />
                    <img src={Icons.location} />
                </div>
                <div className="smallerPostButton">Post</div>
            </div>
        </div>
    );
}
