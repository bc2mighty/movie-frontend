import React from 'react';

function Main({children}) {
    return (
        <div className='col-span-4 p-10'>
            {children}
        </div>
    );
}

export default Main;