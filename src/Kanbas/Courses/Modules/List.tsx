import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlus, FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";


function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module: any) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className="wd-modules-buttons" style={{ marginBottom: 20, marginRight: 20 }}>
                <button type="button" className="btn btn-outline-secondary">Collapse All</button>
                <button type="button" className="btn btn-outline-secondary">View Progress</button>
                <button type="button" className="btn btn-outline-secondary"><i style={{ color: "green" }}
                    className="far fa-check-circle"></i>

                    Publish All</button>
                <button type="button" className="btn btn-danger"><i className="fas fa-plus"></i>
                    Module</button>
                <button type="button" className="btn btn-outline-secondary"> <FaEllipsisV /> </button>
            </div>

            <ul className="list-group wd-modules ms-4 me-4 me-lg-2 ms-lg-2">
                {modulesList.map((module: any) => (
                    <li
                        className="list-group-item mt-3 p-0"
                        onClick={() => setSelectedModule(module)}>
                        <div className="wd-modules-week-style">
                            <div>
                                <FaEllipsisV />{selectedModule._id === module._id ? <FaCaretDown className="me-2" /> : <FaCaretRight className="me-2" />}
                                {module.name}
                            </div>
                            <span>
                                <FaCheckCircle className="text-success ms-2" /><FaCaretDown />
                                <FaPlus className="ms-4" style={{ color: 'gray' }} />
                                <FaEllipsisV className="ms-4 me-3" />
                            </span>
                        </div>

                        {selectedModule._id === module._id && (
                            <ul className="list-group ">
                                {module.lessons?.map((lesson: any) => (
                                    <li className="list-group-item rounded-0 ps-4">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-4" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ModuleList;