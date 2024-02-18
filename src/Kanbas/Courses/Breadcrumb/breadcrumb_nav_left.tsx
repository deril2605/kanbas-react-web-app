import { Dispatch, SetStateAction } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../../Database";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaRegClock, FaYoutubeSquare } from "react-icons/fa";
import { FaCircleRight } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";



interface FuncProps {
    toggle(): void;
}

const BreadcrumbNavLeft: React.FC<FuncProps> = (props) => {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" style={{ color: 'red' }} /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={{ color: 'red' }} /> },
        { label: "Courses", icon: <FaBook className="fs-2" style={{ color: 'red' }} /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" style={{ color: 'red' }} /> },
        { label: "Inbox", icon: <FiPrinter className="fs-2" style={{ color: 'red' }} /> },
        { label: "History", icon: <FaRegClock className="fs-2" style={{ color: 'red' }} /> },
        { label: "Studio", icon: <FaYoutubeSquare className="fs-2" style={{ color: 'red' }} /> },
        { label: "Commons", icon: <FaCircleRight className="fs-2" style={{ color: 'red' }} /> },
        { label: "Help", icon: <IoIosHelpCircleOutline className="fs-2" style={{ color: 'red' }} /> },
    ];
    const handleClick = () => {
        props.toggle();
        const element = document.getElementById("wrapper");
        if (element) {
            element.style.display = 'block';
        }
    };
    const { pathname } = useLocation();
    return (

        <nav className="nav-menu mt-2" >
            <ul>
                {
                    links.map((link, index) => (
                        <li style={{ listStyle: 'none' }} onClick={() => handleClick()} key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                            {link.label == "Courses" ? <Link style={{ color: 'red' }} to={`/Kanbas/Dashboard`}> {link.icon} {link.label} </Link> : <Link style={{ color: 'red' }} to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>}
                        </li>
                    ))
                }
            </ul>
        </nav >
    );
}

export default BreadcrumbNavLeft