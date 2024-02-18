import { useState } from "react";
import { FaBars, FaGlasses, FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import BreadcrumbNavLeft from "./breadcrumb_nav_left";
import BreadcrumbNavRight from "./breadcrumb_nav_right";

function BreadcrumbNav() {
    const { pathname } = useLocation();
    const [isRightVisible, setIsRightVisible] = useState(false);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const toggleRightVisibility = () => {
        toggleRight()
        const element = document.getElementById("wrapper");
        if (isRightVisible && element) {
            element.style.display = 'block';
        } else if (element) {
            element.style.display = 'none';
        }

    };

    const toggleLeftVisibility = () => {
        toggleLeft()
        const element = document.getElementById("wrapper");
        if (isLeftVisible && element) {
            element.style.display = 'block';
        } else if (element) {
            element.style.display = 'none';
        }

    };
    const toggleRight = () => {
        if (!isRightVisible) {
            setIsLeftVisible(false)
        }
        setIsRightVisible(!isRightVisible);
    }
    const toggleLeft = () => {
        if (!isLeftVisible) {
            setIsRightVisible(false)
        }
        setIsLeftVisible(!isLeftVisible);
    }
    return (
        <div>
            <header className="navbar navbar-dark bg-dark" >
                <div className="menu-button ms-2">
                    {/* <a href="/Kanbas/Navigation/nav_menu.html"> */}
                    <FaBars style={{ color: "red" }} onClick={toggleLeftVisibility} />
                    {/* </a> */}

                </div>
                <div style={{ color: "white" }} className="navbar-content">
                    <p>CS4550.MERGED.126131</p>
                    <p>{pathname.split('/').pop()}</p>
                </div>

                <div className="me-4">
                    <FaGlasses style={{ color: "white" }} className="fs-5" />
                    <FaAngleDown style={{ color: "white" }} onClick={toggleRightVisibility} />
                </div>

            </header>
            {
                isRightVisible && (
                    <BreadcrumbNavRight toggle={toggleRight} />
                )
            }
            {
                isLeftVisible && (
                    <BreadcrumbNavLeft toggle={toggleLeft} />
                )
            }
        </div >
    );


}

export default BreadcrumbNav