import { Button, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllAstroidData } from '../Redux/Action';

const MainData = () => {
    const [InputValue, setInputValue] = useState(null);
    const dispatch = useDispatch();
    const state = useSelector(state => state?.data?.payload)
    let history = useHistory();


    useEffect(() => {
        dispatch(getAllAstroidData())
    }, []);



    const onSubmit = () => {
        history.push(`${InputValue}`);
    }

    return (
        <div>
            <TextField label='Enter Astroid ID' onChange={(e) => setInputValue(e.target.value)}></TextField>
            <div>
                <Button disabled={!InputValue} onClick={onSubmit}>Submit</Button>
                <Button>Random Select Id</Button>
            </div>
        </div>
    );
}

export default MainData;