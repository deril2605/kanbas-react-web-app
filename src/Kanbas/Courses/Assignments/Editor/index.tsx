import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaEllipsisV, FaRegCheckCircle } from "react-icons/fa";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <div className="float-end me-3 mt-3 ">
                        <FaRegCheckCircle className="fs-5" style={{ color: 'green' }} /> <span style={{ color: 'green' }}><strong>Published</strong></span>
                        <button type="button" className="btn btn-outline-secondary ms-3"> <FaEllipsisV />
                        </button>
                    </div>
                </div>
                <hr />
                <div style={{ marginRight: 30 }}>
                    <h4>Assignment Name</h4>
                    <input value={assignment?.title}
                        className="form-control mb-2" />
                    <hr />
                    <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
                        Save
                    </button>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn float-end btn-outline-secondary">
                        Cancel
                    </Link>
                </div>
            </div>


        </div>
    );
}
export default AssignmentEditor;