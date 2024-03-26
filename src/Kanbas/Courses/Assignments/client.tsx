import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";
const ASSIGNMENTS_API = "http://localhost:4000/api/assignments";

interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: string;
    due: string;
    until: string;
    available_from: string;
}

export const findAssignmentsForCourse = async (courseId: string | undefined) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId: string | undefined, assignment: Assignment) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};


export const deleteAssignment = async (assignmentId: string | null) => {
    const response = await axios
        .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};


