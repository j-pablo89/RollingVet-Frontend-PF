import React from 'react';
import { Button, Image } from 'react-bootstrap';

const Error404 = () => {
    return (
        <div className='text-center'>
            <Image src='../src/assets/errorpage.jpg' className='img-fluid'></Image>
            <Button variant='danger' className='mb-3 px-5'>Regresar</Button>
        </div>
    );
};

export default Error404;