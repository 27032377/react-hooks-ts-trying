import React from 'react';
import loading from '../../assets/images/loading.gif';
import  './loading.scss';

export default () => {
    return (
        <div className='img-box'>
            <section className='img-position'>
                <img src={loading} alt='loding' style={{width: '40%'}} />
            </section>
        </div>
    )
}