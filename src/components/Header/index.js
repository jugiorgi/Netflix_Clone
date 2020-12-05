import React from 'react';
import './styles.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png"/>
            </div>
            <div className="header--user">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"/>
            </div>
        </header>
    )
}