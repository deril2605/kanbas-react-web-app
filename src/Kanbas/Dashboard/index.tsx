import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdEditNote } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { MdDeleteForever } from "react-icons/md";

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

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: Course[], course: Course, setCourse: (course: Course) => void; addNewCourse: () => void; deleteCourse: (courseId: string) => void;
        updateCourse: () => void;
    }
) {
    return (
        <div className="">
            <div className="main-dashboard-container">
                <div className="p-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-none d-md-block">
                            <h1>Dashboard</h1>
                            <h5>Add a course</h5>
                            <div className="d-flex ">
                                <input value={course.name} className="form-control me-3"
                                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                                <input value={course.number} className="form-control me-3"
                                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                                <input value={course.startDate} className="form-control me-3" type="date"
                                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                                <input value={course.endDate} className="form-control me-3" type="date"
                                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                            </div>
                            <button className="mt-3 btn btn-danger" onClick={addNewCourse} >
                                Add Course
                            </button>
                            <button className="ms-2 mt-3 btn btn-danger" onClick={updateCourse} >
                                Update Course
                            </button>

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
                                        <div className="card-body wd-kanbas-custom-card ps-0 pt-0 pe-0">
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


                                                <MdDeleteForever onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="fs-4 ms-2" />

                                            </Link>

                                            <MdEditNote onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }} className="wd-kanbas-dashboard-assignments-link fs-2" style={{ color: "blue" }} />


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