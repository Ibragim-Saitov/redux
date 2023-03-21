import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


function Todos() {

    const dispatch = useDispatch()

    const todos = useSelector(state => state)

    const handlerDelete = (idx) =>{
      dispatch({
        type: 'delete',
        payload: idx
      })  
    }


    return (
      <ul className='list-group'>
      {todos.map((item, idx) =>{
        return (
         <li className='list-group-item d-flex align-item-center justify-content-between' key={idx}>
            <div>
            onClick={() => marktext(idx)} className={item.done === true ? 'line-throungh text-green-400' : ''}>
            </div>
            <div>
            {item.text}
            </div>,
            <button className='btn btn-outline-danger'
            onClick={() => removeTask(idx)}
            >
                X
            </button>
         </li>
        )
      })}
      </ul>
    );
  }
  
  export default Todos;