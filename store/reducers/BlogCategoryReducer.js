import { GET_BLOG_CATEGORY_RED } from "../constants/constants";

export default function BlogCategoryReducer(state = [], action) {
    switch (action.type) {
        case GET_BLOG_CATEGORY_RED:
            return action.data
        default:
            return state
    }
} 