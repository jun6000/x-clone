import "../styles/OtherPanel.css";
import Icons from "./Icons";
import Trending from "./Trending";

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
            <div className="trendingPanel">
                <div className="trendingHeader">What&apos;s happening</div>
                <Trending categories={["US Open", "LIVE"]} title="US Open Tennis 2023" info="Trending" />
                <Trending categories={["Art & Culture", "Trending"]} title="Kafka" info="25.1K posts" />
                <Trending categories={["Trending"]} title="Gojo" info="57.4K posts" />
                <Trending categories={["Trending"]} title="#ONEPIECE1092" info="3,091 posts" />
                <div className="trendingFooter">Show more</div>
            </div>
        </div>
    );
}
