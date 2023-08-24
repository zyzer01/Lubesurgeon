import React from 'react';

function Label(props) {
    return (
        <div>
              <label htmlFor={props.purpose} className="leading-7 text-sm text-gray-700">
                {props.name}
            </label>
        </div>
    );
}

export default Label;