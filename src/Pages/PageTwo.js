import React, { useReducer, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


function PageTwo() {
   
    const story = ["Hat","Bat","Cat"]
    
    const index = 0 
   const words = [index + 1]
    function add(x){
   const story2 = story[0]
   return 
}
function origin(g){
    if (g ==[]){
return g
    }
    return add(1)
}
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
            <div className="words">Fox never liked the name but his father thought it was a funny play-on word so he’s keeping it that way just for him.</div>
            <button onClick="/three">Next</button>
        </div>
    )
}
export default PageTwo