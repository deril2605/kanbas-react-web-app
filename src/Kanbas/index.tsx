import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number", details: "New.Course", term: "20240101_Spring_2024_Full",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "newcourse.jpeg"
    });

    const COURSES_API = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(COURSES_API);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    // Deprecated: Using Axios to perform the action now
    // const addNewCourse = () => {
    //     const newCourse = {
    //         ...course,
    //         _id: new Date().getTime().toString()
    //     };
    //     setCourses([...courses, { ...course, ...newCourse }]);
    // };

    const addNewCourse = async () => {
        const response = await axios.post(COURSES_API, course);
        setCourses([...courses, response.data]);
    };

    const deleteCourse = async (courseId: string) => {
        const response = await axios.delete(
            `${COURSES_API}/${courseId}`
        );
        setCourses(courses.filter(
            (c) => c._id !== courseId));
    };

    // Deprecated: Using Axios to perform the action now
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    const updateCourse = async () => {
        const response = await axios.put(
            `${COURSES_API}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
    };

    // Deprecated: Using Axios to perform the action now
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };
    return (
        <Provider store={store}>
            <div className="d-flex">
                <div className="col-lg-1 col-md-1 col-sm-1 d-none d-md-block ps-0 pe-0">
                    <KanbasNavigation />
                </div>
                <div style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />} />
                        <Route path="Courses/*" element={<h1>Courses</h1>} />
                        <Route path="Courses/:courseId/*" element={<Courses />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;
