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
                <input type="checkbox" checked={item.done} />
                {item.done}
            </div>
            <div>
            {item.text}
            </div>
            <button className='btn btn-outline-danger'
            onClick={() => handlerDelete(idx)}
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