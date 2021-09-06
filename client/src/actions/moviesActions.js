import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "../types/types"


export const moviesAction = () =>{
    return {
        type: "FETCH_MOVIES_REQUEST",
    }
}

