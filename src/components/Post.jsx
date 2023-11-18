import Icons from "./Icons";
import "../styles/Post.css";

export default function Post({ pfp, userName, userHandle, time, contentText, contentImage, comments, retweets, likes, views }) {
    return (
        <div className="postContainer">
            <div className="pfpPanel">
                <img className="userPfp" src={pfp} />
            </div>
            <div className="postContent">
                <span className="posterName">
                    {userName}
                </span>
                <img className="verifiedImage" src={Icons.verified} />
                <span className="posterHandleTime">
                    {" @" + userHandle + " · " + time + "h"}
                </span>
                <div className="contentText">
                    {contentText}
                </div>
                <img className="contentImage" src={contentImage} />
                <div className="postStats">
                    <div className="postStatButton commentsButton">
                        <img src={Icons.comments} />
                        {comments}
                    </div>
                    <div className="postStatButton retweetsButton">
                        <img src={Icons.retweets} />
                        {retweets}
                    </div>
                    <div className="postStatButton likeButton">
                        <img src={Icons.like} />
                        {likes}
                    </div>
                    <div className="postStatButton viewsButton">
                        <img src={Icons.views} />
                        {views}
                    </div>
                    <div className="shareBookmark">
                        <div className="postStatButton bookmarkButton">
                            <img src={Icons.bookmark} />
                        </div>
                        <div className="postStatButton shareButton">
                            <img src={Icons.share} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
