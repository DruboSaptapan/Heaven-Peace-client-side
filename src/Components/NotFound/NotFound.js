import React from 'react';

import notFoundImg from './images/page_not_found.svg'

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <img src={notFoundImg} alt="" className="img-fluid" width='55%' />
                <div className="not_found"></div>
            </div>
        </div>
    );
};

export default NotFound;