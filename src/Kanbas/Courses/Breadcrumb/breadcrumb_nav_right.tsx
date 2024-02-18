import { Dispatch, SetStateAction } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../../Database";
import { FaHouseChimney, FaFilePen } from "react-icons/fa6";
import { FaRecycle, FaPlug, FaBook } from "react-icons/fa";



interface FuncProps {
    toggle(): void;
}

const BreadcrumbNavRight: React.FC<FuncProps> = (props) => {
    const links = [
        { label: "Home", icon: <FaHouseChimney className="fs-2" style={{ color: 'red' }} /> },
        { label: "Modules", icon: <FaRecycle className="fs-2" style={{ color: 'red' }} /> },
        { label: "Piazza", icon: <FaPlug className="fs-2" style={{ color: 'red' }} /> },
        { label: "Grades", icon: <FaFilePen className="fs-2" style={{ color: 'red' }} /> },
        { label: "Assignments", icon: <FaBook className="fs-2" style={{ color: 'red' }} /> },
    ];
    const { pathname } = useLocation();
    const handleClick = () => {
        props.toggle();
        const element = document.getElementById("wrapper");
        if (element) {
            element.style.display = 'block';
        }
    };
    return (

        <nav className="nav-menu mt-2" >
            <ul>
                {
                    links.map((link, index) => (
                        <li style={{ listStyle: 'none' }} onClick={() => handleClick()} key={index + 1} className={pathname.includes(link.label) ? "wd-active" : ""}>
                            <Link style={{ color: 'red' }} to={link.label}> {link.icon} {link.label} </Link>
                        </li>
                    ))
                }
            </ul>
        </nav >
    );
}

export default BreadcrumbNavRight