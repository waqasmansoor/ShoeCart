import React from 'react';
import { useLocation } from 'react-router-dom';

function NoMatch(){
    let location=useLocation()
    return(
        <h3>
            No Match for <code>{location.pathname}</code>
        </h3>
    )
}

export default NoMatch