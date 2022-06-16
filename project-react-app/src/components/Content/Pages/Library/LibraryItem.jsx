import React from 'react';

const LibraryItem = (props) => {
    return (<div>
            <h2>{props.book}</h2>
            <img src={props.cover} alt=""/>
            <p>Author `{props.name}` `{props.sName}`</p>
        </div>
    );
};

export default LibraryItem;