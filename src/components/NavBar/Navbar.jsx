import "./NavBar.css";
import DownloadPDF from "../DownloadPDF/DownloadPDF";

const NavBar = ({ date, values }) => {
    return (
        <div className="nav-container">
            <h1 id="nav-title">life-js</h1>
            {date && values && (
                <DownloadPDF date={date} values={values} />
            )}
        </div>
    );
}

export default NavBar;