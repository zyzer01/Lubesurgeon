import React from 'react';

function Heading(props) {
    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="sm:text-4xl text-2xl font-bold title-font text-balablue mb-4">{props.headTitle}</h1>
                <p className="mb-8 text-lg text-secondary leading-relaxed">{props.sub}</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
                </div>
            </div>
        </div>
    );
}

export default Heading;