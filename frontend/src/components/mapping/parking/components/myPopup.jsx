import React from 'react';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| Components
|--------------------------------------------------
*/
import MyBtnPopup from './myBtnPopup';

/**
|--------------------------------------------------
| Libraries
|--------------------------------------------------
*/
import { Popup } from 'react-leaflet';

const MyPopup = ({ id, name, address, p, type }) => {

    return (
        <Popup>
            Parking {id}<br />
            {name}<br />
            {address} <br />
            <MyBtnPopup
                text='Check availability'
                p={p}
                type={type}
            />
        </Popup>
    )
}

MyPopup.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    p: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
};

export default MyPopup;
