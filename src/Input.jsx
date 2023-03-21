import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Input () {
    const dispatch = useDispatch();
    const task = useSelector(state => state);

    const [input, setInput] = useSelector('');

    function change(e) {
      setInput(e.target.value)
    }

    function add(e) {
        dispatch({type: 'add', payload: input});
        setInput('');
    }
}

return (
    <>
    <input type="text" 
    value={inp} 
    onChange={change}>
    </input>
    <button onClick={() => add()}>+</button>
    </>
)