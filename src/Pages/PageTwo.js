import React, { useReducer, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


function PageTwo() {
   
  
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
            <div className="story">Fox never liked the name but his father 
            <br/>thought it was a funny play-on word so he’s 
            <br/>keeping it that way just for him.
            </div>
        </div>
    )
}
export default PageTwo