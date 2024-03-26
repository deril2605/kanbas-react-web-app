import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisV, FaRegCheckCircle } from "react-icons/fa";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { addAssignment, setAssignment, updateAssignment, initialState } from "../assignmentsReducer";
import * as client from "../client";


function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSave = () => {
        if (assignment && assignment._id) {
            handleUpdateAssignment();
        } else {
            handleAddAssignment();
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleAddAssignment = () => {
        client.createAssignment(courseId, { ...assignment, course: courseId }).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    };

    const handleUpdateAssignment = async () => {
        const status = await client.updateAssignment({ ...assignment, course: courseId });
        dispatch(updateAssignment(assignment));
    };



    const defaultAssignment = initialState.assignment

    const assignmentAllList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);

    useEffect(() => {
        if (assignmentId !== "new") {
            const editingAssignment = assignmentAllList.find(assignment => assignment._id === assignmentId);
            if (editingAssignment) {
                dispatch(setAssignment(editingAssignment));
            }
        } else {
            dispatch(setAssignment(defaultAssignment));
        }
    }, [assignmentId, assignmentAllList, dispatch]);

    return (
        <div>
            <div className="d-flex flex-column ms-3 me-2">
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
                    <input value={assignment?.title} onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, title: e.target.value }))
                    }
                        className="form-control mb-2" />
                    <textarea rows={4} className="form-control" onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, description: e.target.value }))
                    }
                        value={assignment?.description} />
                    <div className="container mt-3 mb-2 d-flex justify-content-end" >
                        <div className="row mb-3 mb-3 w-75">
                            <div className="text-end col-lg-3 col-md-3 col-3"><label
                            >Points</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-9"><input type="string"
                                className="form-control " value={assignment?.points} onChange={(e) =>
                                    dispatch(setAssignment({ ...assignment, points: e.target.value }))
                                } />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-3 col-md-3 col-3 text-end">
                            <label>Assign</label>
                        </div>
                        <div className="col-lg-9 col-md-9 col-9">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item pb-0">
                                        <h6 className="m-0"><strong>Due</strong></h6>
                                    </li>
                                    <li className="list-group-item pb-0">
                                        <input id="startDate" className="form-control"
                                            type="date" value={assignment?.due} onChange={(e) =>
                                                dispatch(setAssignment({ ...assignment, due: e.target.value }))
                                            } />
                                    </li>
                                    <li className="list-group-item pb-0 date-split">
                                        <div className="container">
                                            <div className="row mb-2">
                                                <div style={{ paddingLeft: 0 }} className="col-6">
                                                    <h6 className="m-0"><strong>Available from</strong></h6>
                                                </div>
                                                <div style={{ paddingLeft: 0 }} className="col-6">
                                                    <h6 className="m-0"><strong>Until</strong></h6>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div style={{ paddingLeft: 0 }} className="col-6">
                                                    <input id="startDate" className="form-control"
                                                        type="date" value={assignment?.available_from} onChange={(e) =>
                                                            dispatch(setAssignment({ ...assignment, available_from: e.target.value }))
                                                        } />
                                                </div>
                                                <div style={{ paddingLeft: 0 }} className="col-6">
                                                    <input id="startDate" className="form-control"
                                                        type="date" value={assignment?.until} onChange={(e) =>
                                                            dispatch(setAssignment({ ...assignment, until: e.target.value }))
                                                        } />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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