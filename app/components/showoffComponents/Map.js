import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { Card, CardHeader } from '@mui/material';

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};



const Map = () => {
    const [center, setCenter] = useState({
        lat: 59.95,
        lng: 30.33
    });
    const zoom = 13;

    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

    function success(pos) {
        const crd = pos.coords;
        setCenter({
            lat: crd.latitude,
            lng: crd.longitude
        })
    };

    function errors(err) {
        alert(`ERROR(${err.code}): ${err.message}`);
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                    result.onchange = function () {
                        console.log(result.state);
                    };
                });
        } else {
            alert("Sorry Not available!");
        }

    }, [])


    return (
        <Card className='map-card'>
            <CardHeader
                title="Your approximate location"
            />
            <div style={{ height: '50vh', width: '60%', margin: '0 auto' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDVRyc7RdqaEbGTI8l4wVhhxmoVuzhAKvM" }}
                    center={center}
                    defaultZoom={zoom}
                    options={getMapOptions}
                >
                    <Marker
                        lat={center.lat}
                        lng={center.lng}
                        name="Your Estimated Location"
                        color="red"
                    />
                </GoogleMapReact>
            </div>
        </Card>
    );
};

export default Map;