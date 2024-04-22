import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import 'firebase/compat/firestore';
import './SubmitForm.css';
import Navbar from "../Navbar/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MapComponent from "../MapComponent/MapComponent"; 
import firebase from 'firebase/compat/app';

const db = firebase.firestore();

const SubmitForm = () => {
    const { building } = useParams();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [accessibilityOption, setAccessibilityOption] = useState('');
    const [description, setDescription] = useState('');
    const [clickedPosition, setClickedPosition] = useState(null)

    const handleMapClick = (event) => {
        const latLng = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };


        console.log(event)
        console.log("Latitude:", latLng.lat, "Longitude:", latLng.lng);
        setLatitude(latLng.lat);
        setLongitude(latLng.lng);
        setClickedPosition(latLng)
    }
    
    useEffect(() => {
        if (description === '' && (accessibilityOption === 'elevator' || accessibilityOption === 'automatic door')) {
            setDescription(`This is an ${accessibilityOption}`);
        }

        else if (description === '' &&  accessibilityOption !== '') {
            setDescription(`This is a ${accessibilityOption}`)
        }

    }, [accessibilityOption, description]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate latitude and longitude
        if (latitude === '' || longitude === '') {
            alert('You need to click on the position of the accessibility feature on the map');
            return;
        }
        
        if (accessibilityOption === '') {
            alert('Accessibility type is required');
            return;
        }

        try {
            // Check if latitude and longitude are valid numbers
            if (isNaN(latitude) || isNaN(longitude)) {
                console.error('Latitude or longitude is not a valid number');
                return;
            }

            // Add data to Firestore
            await db.collection('markers').add({
                building: building,
                position: new firebase.firestore.GeoPoint(latitude, longitude),
                type: accessibilityOption,
                description: description,
            });

            // Reset form fields
            setLatitude('');
            setLongitude('');
            setAccessibilityOption('');
            setDescription('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                
                <div className="form">
                    <div className="form-title">
                        <h2><strong>New Accessibility Information Form</strong></h2>
                        <div className="detailed-form">
                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3" controlId="form.AccessibilityOption">
                                    <Form.Label>Accessibility Feature Type</Form.Label>
                                    <Form.Select value={accessibilityOption} onChange={(e) => setAccessibilityOption(e.target.value)}>
                                        <option value="">Select an option</option>
                                        <option value="automatic door">Automatic Door</option>
                                        <option value="elevator">Elevator</option>
                                        <option value="ramp">Ramp</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                                    <Form.Label>Descriptions</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter descriptions..." />
                                </Form.Group>

                                <div className='map'>
                                    <MapComponent handleMapClick={handleMapClick} clickedPosition={clickedPosition}/>
                                </div>

                                <div className='formBtn'>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                                
                            </Form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitForm;