import { GET_GALLERY_RED } from "../constants/constants";

export default function GalleryReducer(state = [], action) {
    switch (action.type) {
        case GET_GALLERY_RED:
            return action.data
        default:
            return state
    }
} 