import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { MdEditNote } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";


function Dashboard() {
    return (
        <div className="">
            <div className="main-dashboard-container">
                <div className="p-4">
                    <div className="d-flex justify-content-between">
                        <div className="d-none d-md-block">
                            <h1>Dashboard</h1>

                        </div>
                        <button type="button" className="d-md-block  d-none btn btn-outline-secondary small-button me-1 d-md-flex justify-content-center align-items-center" style={{ width: 50 }}><FaEllipsisV className="fs-5" /></button>
                    </div>
                    <hr />
                    <h2>Published Courses (9)</h2>
                    <hr />
                    <div className="row">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xxl-6 g-4">
                            {courses.map((course) => (
                                <div key={course._id} className="col" style={{ width: 300 }}>
                                    <div className="card">
                                        <div className="card-body wd-kanbas-custom-card">
                                            <Link className="card-img-top" to={`/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: 'none', color: 'navy', fontWeight: 'bold' }}>
                                                <img src={`/images/${course.image}`} className="card-img-top"
                                                    style={{ maxHeight: 150, minHeight: 150, marginBottom: 16 }} />
                                                <div className="wd-kanbas-custom-title">
                                                    {course.name}
                                                    <p className="wd-kanbas-dashboard-section-code card-text">
                                                        {course.details}
                                                        <p className="wd-kanbas-dashboard-section-term card-text">
                                                            {course.term}</p>
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="#">
                                                <MdEditNote className="wd-kanbas-dashboard-assignments-link fs-2" />
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default Dashboard;