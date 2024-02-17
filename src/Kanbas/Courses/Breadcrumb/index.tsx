import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { courses } from "../../Database";
import { FaGlasses, FaAngleDown, FaBars } from "react-icons/fa";
import NavMenu from "../../Navigation/nav_menu";
import BreadcrumbNav from "./breadcrumb_nav";



function Breadcrumb() {
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    var displayCrumb = null
    links.forEach((link) => {
        if (pathname.includes(link)) {
            displayCrumb = link
        }
    })
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div >
            <div className="d-md-flex d-none col-12 flex-row justify-content-between mt-md-3">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 fs-5" style={{ backgroundColor: "white" }}>
                            <li aria-current="page"><span style={{ color: "rgba(0, 0, 0, 0.618)" }}>
                                <span style={{ color: "red" }}><HiMiniBars3 style={{ marginRight: 15 }} />
                                    {course?.name} </span></span> <span>&gt; </span>
                                <span>{displayCrumb}</span>
                            </li>
                        </ol>
                    </nav >
                </div>
                <div>
                    <button type="button" className="btn btn-outline-secondary me-3">
                        <FaGlasses />  Student View</button>
                </div>
            </div>
            <hr className="d-lg-flex d-none d-md-flex" />
            {/* <BreadcrumbNav /> */}
        </div>
    );
}
export default Breadcrumb;