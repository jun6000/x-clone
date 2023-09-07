import "../styles/Trending.css";

export default function Trending({ categories, title, info }) {
    return (
        <div className="trendingMember">
            <div className="optionsButton">⋯</div>
            <div className="trendingDetails">{categories.join(' · ')}</div>
            <div className="trendingTitle">{title}</div>
            <div className="trendingDetails">{info}</div>
        </div>
    );
}
