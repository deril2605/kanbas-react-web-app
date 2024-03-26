import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: string;
    due: string;
    until: string;
    available_from: string;
}

interface AssignmentsState {
    assignments: Assignment[];
    assignment: Assignment;
}


export const initialState: AssignmentsState = {
    assignments: [],
    assignment: { _id: '', title: "New Assignment", description: "New Assignment Description", points: "", due: "", until: "", available_from: "" }
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action: PayloadAction<Assignment[]>) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;