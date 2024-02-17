import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaEllipsisV, FaFileImport, FaFileExport, FaCaretDown } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="d-flex flex-column ms-md-0 me-md-0 ms-2 me-2">
            <div className="wd-grades-buttons float-end mt-2 me-2">
                <button type="button" className="btn btn-outline-secondary me-1"><FaFileImport />
                    <span className="ms-1">Import</span></button>
                <button type="button" className="btn btn-outline-secondary me-1"><FaFileExport />
                    <span className="ms-1">Export</span> <FaCaretDown /></button>
                <button type="button" className="btn btn-outline-secondary me-2"><FaGear /></button>
            </div>

            <div className="d-flex mt-3 " >
                <div className="d-flex w-50 flex-column">
                    <div className="col-lg-6 w-100 col-md-6 col-6">
                        <h5>Student Names</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 my-1 w-75">
                        <label className="sr-only"></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><FaSearch />
                                </div>
                            </div>
                            <input type="text" className="form-control" id="search-students"
                                placeholder="Search Students" />
                        </div>
                    </div>
                </div>
                <div className="d-flex w-50  flex-column">
                    <div className="col-lg-6 w-100 col-md-6 col-6">
                        <h5>Assignment Names</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 my-1 w-75">
                        <label className="sr-only" ></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><FaSearch />
                                </div>
                            </div>
                            <input type="text" className="form-control" id="search-assignments"
                                placeholder="Search Assignments" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-responsive me-3 mt-3">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <th className="table-active" scope="col" style={{ textAlign: 'left', width: '15%' }}>Student Name</th>
                        {as.map((assignment) => (<th scope="col" className="table-active col-4">{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td style={{ textAlign: 'left' }}><a href="#">{user?.firstName} {user?.lastName}</a></td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;
