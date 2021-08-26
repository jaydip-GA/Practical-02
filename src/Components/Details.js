import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getAstoridDetails } from '../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const Details = () => {
    const { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state => state?.data?.payload)

    useEffect(() => {
        dispatch(getAstoridDetails(id))
    }, []);

    console.log("sttate", state)


    return (
        <div>
            {JSON.stringify(state)}
            <Button onClick={() => history.goBack()}>Go back</Button>
        </div>
    );
}

export default Details;
