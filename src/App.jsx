import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";
import './styles/App.css';

export default function App() {
    return (
        <div className="app">
            <SidePanel />
            <MainPanel />
        </div>
    );
}
