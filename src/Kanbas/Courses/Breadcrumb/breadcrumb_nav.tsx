import { FaBars, FaGlasses, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function BreadcrumbNav() {
    return (

        <header className="navbar navbar-dark bg-dark" >
            <div className="menu-button ms-2">
                {/* <a href="/Kanbas/Navigation/nav_menu.html"> */}
                <FaBars style={{ color: "red" }} />
                {/* </a> */}

            </div>
            <div style={{ color: "white" }} className="navbar-content">
                <p>CS4550.MERGED.126131</p>
                <p>Modules</p>
            </div>

            <div className="me-4">
                <FaGlasses style={{ color: "white" }} className="fs-5" />
                <FaAngleDown style={{ color: "white" }} />
                {/* <Link to="ViewMenu"><FaAngleDown style={{ color: "white" }} className="fs-5" /></Link> */}
            </div>
        </header>


    );


}

export default BreadcrumbNav