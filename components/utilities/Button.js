import React from 'react';

function Button(props) {
    return (
            <button type={props.type} className="inline-flex items-center bg-balablue border-2 border-balablue py-2 px-3 focus:outline-none hover:bg-white hover:text-balablue hover:border-2 hover:border-balablue transition-all rounded-lg text-white mt-4 md:mt-0">{props.text}</button>
    );
}

export default Button;