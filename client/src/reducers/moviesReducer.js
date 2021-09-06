import {  FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from '../types/index.js';

const initialState = {
    movies: [],
    loading: false
}


const moviesReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_MOVIES_REQUEST:{
            return{
                ...state,
                loading: true
            }
        }
        case FETCH_MOVIES_SUCCESS:{
            return{
                loading: false,
                movies: state.movies,
            }
        }
        case FETCH_MOVIES_FAILURE:{
            return{
                loading: false,
                movies: []
            }
        }
        default: return state;
    }
}