import { GET_CLIENTS_RED } from "../constants/constants";

export default function ClientsReducer(state = [], action) {
    switch (action.type) {
        case GET_CLIENTS_RED:
            return action.data
        default:
            return state
    }
} 