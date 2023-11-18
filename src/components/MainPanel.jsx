import "../styles/MainPanel.css";
import Post from "./Post";
import Icons from "./Icons";
import samplePost1 from "../assets/posts/1/samplePost";
import samplePost2 from "../assets/posts/2/samplePost";
import samplePost3 from "../assets/posts/3/samplePost";
import samplePost4 from "../assets/posts/4/samplePost";
import samplePost5 from "../assets/posts/5/samplePost";
import samplePost6 from "../assets/posts/6/samplePost";
import samplePost7 from "../assets/posts/7/samplePost";
import samplePost8 from "../assets/posts/8/samplePost";

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
            <div className="posts">
                <Post {...samplePost8} />
                <Post {...samplePost4} />
                <Post {...samplePost5} />
                <Post {...samplePost7} />
                <Post {...samplePost6} />
                <Post {...samplePost1} />
                <Post {...samplePost2} />
                <Post {...samplePost3} />
            </div>
        </div>
    );
}
