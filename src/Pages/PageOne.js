import React, { useReducer, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function PageOne() {
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
            <div className='story'>
                <div>You play as Fox Skelton,  a Private Detective
                     <br/>who has recently just been given his own firm 
                     <br/>from his father(Franklin B. Skelton)  who has now passed away. 
                     <br/>Right now you are unpacking all of your supplies 
                     <br/>for your new office. The firm had recently been moved 
                     <br/>because the old one reminded you too much of your father, and it also 
                     <br/>shows that things are not the same anymore at “Skeleton Investigators”. </div>
            </div>
            <Link to="/two" className="next"><button >Next</button></Link>
        </div>
    )
}

export default PageOne