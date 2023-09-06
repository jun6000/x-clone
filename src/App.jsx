import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";
import OtherPanel from "./components/OtherPanel";
import "./styles/App.css";
import pfp from "./assets/userPfp.jpeg";

export default function App() {
    return (
        <div className="app">
            <SidePanel pfp={pfp} />
            <MainPanel pfp={pfp} />
            <OtherPanel />
        </div>
    );
}
