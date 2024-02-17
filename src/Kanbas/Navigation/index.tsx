import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaRegClock, FaYoutubeSquare } from "react-icons/fa";
import { FaCircleRight } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" style={{ color: 'white' }} /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={{ color: 'red' }} /> },
        { label: "Courses", icon: <FaBook className="fs-2" style={{ color: 'red' }} /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" style={{ color: 'red' }} /> },
        { label: "Inbox", icon: <FiPrinter className="fs-2" style={{ color: 'red' }} /> },
        { label: "History", icon: <FaRegClock className="fs-2" style={{ color: 'red' }} /> },
        { label: "Studio", icon: <FaYoutubeSquare className="fs-2" style={{ color: 'red' }} /> },
        { label: "Commons", icon: <FaCircleRight className="fs-2" style={{ color: 'red' }} /> },
        { label: "Help", icon: <IoIosHelpCircleOutline className="fs-2" style={{ color: 'red' }} /> },
    ];
    const { pathname } = useLocation();
    return (

        <ul className="wd-kanbas-navigation">
            <li><a href="http://northeastern.edu"><img className="neu_logo_nav" src="/images/neu_nav.png" /></a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    {link.label == "Courses" ? <Link to={`/Kanbas/Dashboard`}> {link.icon} {link.label} </Link> : <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>}
                </li>
            ))}
        </ul>

    );
}
export default KanbasNavigation;