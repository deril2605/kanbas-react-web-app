import { courses } from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css"
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import ViewMenu from "../Navigation/view_menu";
import BreadcrumbNav from "./Breadcrumb/breadcrumb_nav";

type Course = {
    _id: string;
    name: string;
    number: string;
    details: string;
    term: string;
    startDate: string;
    endDate: string;
    image: string;
};

function Courses({ courses }: { courses: Course[] }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div className="container-fluid ps-0 pe-0">
            <div className="col-12">
                <div className="col-lg-12 col-sm-12 col-md-12 col-12 ps-md-3 pe-md-3 ps-0 pe-0">
                    <Breadcrumb />
                </div>
                <div className="d-sm-block d-md-none col-12 p-0">
                    <BreadcrumbNav />
                </div>
                <div className="d-flex justify-content-around ">
                    <div className="col-lg-2 col-md-2  col-sm-1 ps-0 pe-0 d-none d-md-block">
                        <CourseNavigation />
                    </div>
                    <div id="wrapper" className="col-sm-12 col-md-10 d-md-block">
                        <div>
                            <div
                                // className="overflow-y-scroll position-fixed bottom-0 end-0"
                                style={{ left: "320px", top: "50px", marginTop: 15 }} >
                                <Routes>
                                    <Route path="/" element={<Navigate to="Home" />} />
                                    <Route path="Home" element={<Home />} />
                                    <Route path="Modules" element={<Modules />} />
                                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                                    <Route path="Assignments" element={<Assignments />} />
                                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                                    <Route path="Grades" element={<Grades />} />
                                    <Route path="ViewMenu" element={<ViewMenu />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}
export default Courses;