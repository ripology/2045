import React, { useReducer, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'


function Characters() {
    const dataReducer = (state, action) => {
        if (action.type === "SET_ERROR") {
            return { ...state, list: [], error: true };
        }
        if (action.type === "SET_LIST") {
            return { ...state, list: action.list, error: null };
        }
        throw new Error();
    };
    const initialData = {
        list: [],
        error: null
    };
    const [data, dispatch] = useReducer(dataReducer, initialData);

    useEffect(() => {
        axios
            .get("http://localhost:3100/choices")
            .then(response => {
                console.log(response);
                dispatch({ type: "SET_LIST", list: response.data });
            })
            .catch(() => {
                dispatch({ type: "SET_ERROR" });
            });
    }, []);
    return (
       <div>
       
        </div> 
    )
}
export default Characters