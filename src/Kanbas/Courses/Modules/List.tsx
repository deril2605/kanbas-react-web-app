import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlus, FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";


function ModuleList() {
    const { courseId } = useParams();
    const [selectedModule, setSelectedModule] = useState(null);
    // const [modulesList, setModuleList] = useState(modules);

    const modulesList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

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

            <div className="d-flex ">


                <div className="form-group">
                    <input className="form-control w-75" value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                    /></div>
                <textarea className="form-control w-75" value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))
                    }
                />

            </div>
            <div className="d-flex">
                <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="mt-3 btn btn-danger me-3 w-25">Add Module</button>
                <button className="mt-3 btn btn-danger me-3 w-25" onClick={() => dispatch(updateModule(module))}> Update
                </button>
            </div>

            <ul className="list-group wd-modules ms-4 me-4 me-lg-2 ms-lg-2">
                {
                    modulesList
                        .filter((module) => module.course === courseId)
                        .map((module: any) => (
                            <li
                                className="list-group-item mt-3 p-0"
                                onClick={() => setSelectedModule(module._id)}>
                                <div className="wd-modules-week-style">
                                    <div>
                                        <FaEllipsisV />{selectedModule === module._id ? <FaCaretDown className="me-2" /> : <FaCaretRight className="me-2" />}
                                        {module.name}
                                    </div>
                                    <span>
                                        <FaEdit onClick={() => dispatch(setModule(module))} className="ms-4 " />
                                        <MdDeleteForever className="ms-2 fs-5" onClick={() => dispatch(deleteModule(module._id))} />
                                        <FaCheckCircle className="text-success ms-2" /><FaCaretDown />
                                        <FaPlus className="ms-4" style={{ color: 'gray' }} />
                                        <FaEllipsisV className="ms-4 me-3" />
                                    </span>
                                </div>

                                {selectedModule === module._id && (
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
                        ))
                }
            </ul >
        </div >
    );
}
export default ModuleList;