import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| Components
|--------------------------------------------------
*/
import { MyNavbar } from '../../ui/navbar/my-navbar';
import { Footer } from '../../ui/footer';
import MyParkingsWithFreeBoxes from './components/myParkingsWithFreeBoxes';

/**
|--------------------------------------------------
| Services
|--------------------------------------------------
*/
import ParkingDataService from '../../../services/parking.service';

const ParkingScreen = ({ history }) => {

    /*const [allParkings, setAllParkings] = useState({});

    const getAllParkings = async () => {
        const parkings = await ParkingDataService.getAll();
        if (parkings) setAllParkings(parkings);
    };

    useEffect(() => {
        try {
            getAllParkings();
        } catch (error) {
            console.log(error);
        }
    }, []);*/

    return (
        <>
            <MyNavbar history={history} />
            <MyParkingsWithFreeBoxes history={history} />
            <Footer />
        </>
    )
};

ParkingScreen.propTypes = {
    history: PropTypes.object.isRequired
};

export default ParkingScreen;