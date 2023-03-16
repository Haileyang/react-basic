import React from 'react';

export default function Avatar(props) {
    return (
        <div className='avatar'>
            <img 
                src={props.img}
                alt="avatar"
                className="photo"
            />
            {
                props.isNew && <span className="new">New</span>
            }
        </div>
    );
}

