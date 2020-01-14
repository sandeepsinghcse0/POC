import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions';

const AddTODO = ({dispatch}) => {
    return (
        <div>
            <form name='TodoForm' onSubmit={(e)=>{
                e.preventDefault();
                var title = e.target.todotitle;
                dispatch(addTodo(title.value));
                title.value = '';
            }
        }>
                <input name='todotitle'/>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

export default connect() (AddTODO)