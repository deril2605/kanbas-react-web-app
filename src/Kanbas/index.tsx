import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import NavMenu from "./Navigation/nav_menu";
import ViewMenu from "./Navigation/view_menu";

function Kanbas() {
    return (
        <div className="d-flex">
            <div className="col-lg-1 col-md-1 col-sm-1 d-none d-md-block ps-0 pe-0">
                <KanbasNavigation />
            </div>
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;
