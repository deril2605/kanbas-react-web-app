import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { courses } from "../../Database";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div className="col-lg-2 col-12 col-md-2 col-sm-1 ps-0 pe-0 d-none d-md-block">
            <ul className="wd-navigation ms-lg-0 ms-md-3 ms-sm-4">
                <li style={{ fontSize: 'small' }} key={0} >{course?.term?.slice(0, 20)}...</li>
                {
                    links.map((link, index) => (
                        <li key={index + 1} className={pathname.includes(link) ? "wd-active" : ""}>
                            <Link to={link}>{link}</Link>
                        </li>
                    ))
                }
            </ul >
        </div>
    );
}
export default CourseNavigation;