import React, { useState, useEffect } from 'react';

/**
|--------------------------------------------------
| Components
|--------------------------------------------------
*/
import { MyContainer } from '../../../ui/my-container';
import MyMarkerMap from './myMarkerMap';
//import MyBtnCurrentPosition from './myBtnCurrentPosition';

/**
|--------------------------------------------------
| Libraries
|--------------------------------------------------
*/
import { TileLayer } from 'react-leaflet';
import { Row, Col } from 'react-bootstrap';

/**
|--------------------------------------------------
| Services
|--------------------------------------------------
*/
import ParkingDataService from '../../../../services/parking.service';

/**
|--------------------------------------------------
| Styled
|--------------------------------------------------
*/
import { MyMap } from '../styled/styleComponents';

const MyParkingsWithFreeScooters = () => {

    const zoom = 13;

    const [freeScooter, setFreeScooter] = useState({
        parkings: [],
        position: [28.128081, -15.4467406]
    });

    const { parkings, position } = freeScooter;

    const allWithAFreeScooters = async () => {
        const free = await ParkingDataService.findAllWithAFreeScooter();
        if (free) setFreeScooter({ ...freeScooter, parkings: free.data });
    };

    useEffect(() => {
        try {
            allWithAFreeScooters();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <MyContainer>
            <Row>
                <Col>
                    <MyMap
                        center={position}
                        zoom={zoom}
                    >
                        <TileLayer
                            attribution=''
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MyMarkerMap
                            parkings={parkings}
                            type='scooter'
                        />

                    </MyMap>
                </Col>
            </Row>

        </MyContainer >
    )
};

export default MyParkingsWithFreeScooters;
