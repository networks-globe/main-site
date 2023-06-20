import { GET_BLOGS_RED } from "../constants/constants";

export default function BlogsReducer(state = [], action) {
    switch (action.type) {
        case GET_BLOGS_RED:
            return action.data
        default:
            return state
    }
} 