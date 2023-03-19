import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = [
  {
    text: 'html',
    done: false
  },
  {
    text: 'css',
    done: true
  },
  {
    text: 'scss',
    done: true
  },
  {
    text: 'JS',
    done: true
  },
  {
    text: 'react',
    done: true
  },
]


const reducer = (state = initialState, action) =>{
  switch(action.type){
    case 'delete':
      return state.filter((item, index) =>{
        if(action.payload === index){
          return false
        } else{
          return true
        }
      })

    
  default:
    return state
  }
  

}

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
  </Provider>
);


