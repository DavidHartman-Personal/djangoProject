import React from 'react';
import {Spinner} from 'react-bootstrap'

/**
 * It returns a Card component with the className prop set to "my-3 p-3 rounded" and the children set to "Product"
 * @param props - This is the object that contains all the properties that were passed to the component.
 * @returns A Card component with the className of "my-3 p-3 rounded" and the text "Product"
 */
function Loader() {
    return (
        <Spinner
            animation={'border'}
            role={'status'}
            style={{
                height: '100px',
                width: '100px',
                margin: 'auto',
                display: 'block'
            }}
        >
            <span className={'sr-only'}>Loading...</span>
        </Spinner>
    );
}

export default Loader;