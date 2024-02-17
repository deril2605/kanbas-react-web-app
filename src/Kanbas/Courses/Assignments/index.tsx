import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaCaretDown, FaEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 20 }}>
                <div className="w-25 float-start">
                    <input type="string" className="form-control " placeholder="Search for Assignments" />
                </div>
                <div className="float-end me-3">
                    <button type="button" className="btn btn-outline-secondary "><FaPlus className="me-1" style={{ color: 'gray' }} />
                        Group</button>
                    <button type="button" className="btn btn-danger ms-1"><FaPlus className="me-1" style={{ color: 'white' }} />
                        Assignment</button>
                    <button type="button" className="btn btn-outline-secondary ms-1"> <FaEllipsisV />
                    </button>
                </div>

            </div>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item mt-3 me-3 p-0">
                    <div className="wd-modules-week-style">
                        <div>
                            <FaEllipsisV className="me-1 ps-2" /><FaCaretDown className="me-1" /> ASSIGNMENTS
                        </div>
                        <span className="float-end">
                            <button type="button"
                                className="border border-dark btn rounded rounded-pill p-2 me-2">40% of
                                Total</button>
                            <FaPlus className="me-1" style={{ color: 'gray' }} />
                            <FaEllipsisV className="ms-2 me-3" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item rounded-0 wd-modules-sub-week-style ps-0" style={{ borderLeft: "3px solid green" }}>
                                {/* <FaEllipsisV className="me-2" />
                                <FaEdit className="me-2 fs-5" style={{ color: 'green' }} />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>

                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span> */}

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div>
                                                <FaEllipsisV className="me-2" />
                                            </div>
                                            <div>
                                                <FaEdit className="me-3 fs-5" style={{ color: 'green' }} />
                                            </div>
                                            <div>
                                                <span><strong><Link
                                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link></strong></span>
                                                <div style={{ fontSize: '70%' }}>
                                                    <p>Week 0 - SETUP - Week starting on Monday September 5th Module
                                                    </p>
                                                    <p><strong>Due</strong> September 18, at 11:59PM | 100 pts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success me-3" />
                                            <FaEllipsisV className="ms-2 " />
                                        </span>
                                    </div>
                                </div>

                            </li>))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
export default Assignments;