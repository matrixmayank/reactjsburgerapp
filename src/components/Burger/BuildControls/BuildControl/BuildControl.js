import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabed}>Less</button>
        <button
            className={classes.More} 
            onclick={props.added}>More</button>
    </div>
);

export default buildControl;