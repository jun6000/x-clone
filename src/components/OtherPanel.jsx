import "../styles/OtherPanel.css";
import Icons from "./Icons";

export default function OtherPanel() {
    return (
        <div className="otherPanel">
            <div className="searchBar">
                <img className="searchIcon" src={Icons.search} />
                <input className="searchField" placeholder="Search" />
            </div>
            <div className="premiumAd">
                <div className="adTitle">Subscribe to Premium</div>
                <div className="adBody">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</div>
                <div className="subscribeButton">Subscribe</div>
            </div>
        </div>
    );
}
