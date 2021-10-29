import React from 'react';

import notFoundImg from './images/page_not_found.svg'

const NotFound = () => {
    return (
        <div className="container">
            <img src={notFoundImg} alt="" className="img-fluid"/>
        </div>
    );
};

export default NotFound;