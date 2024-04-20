import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';

const MapComponent = () => {
    const { building } = useParams();
    const [markers, setMarkers] = useState([]);
    const [mapLoaded, setMapLoaded] = useState(false);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const loadMapScript = async () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
            script.async = true;
            script.onload = () => setMapLoaded(true);
            document.body.appendChild(script);
        };

        if (!window.google) {
            loadMapScript();
        } else {
            setMapLoaded(true);
        }
    }, [API_KEY]);

    useEffect(() => {
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "defind-1972f.firebaseapp.com",
            projectId: "defind",
            storageBucket: "defind.appspot.com",
            messagingSenderId: "87769990736",
            appId: "1:87769990736:web:97d09c7c38c966623b7355"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const fetchMarkers = async () => {
            const db = firebase.firestore();
            const markersRef = db.collection('markers');
            const snapshot = await markersRef.where('building', '==', building).get();
            const markersData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return markersData;
        };

        fetchMarkers().then(data => setMarkers(data));
        console.log(building)
    }, [building, mapLoaded]);

    if (!mapLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <GoogleMap
                center={{ lat: 0, lng: 0 }}
                zoom={4}
                mapContainerStyle={{ width: '50%', height: '1000px' }}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.id}
                        position={{ lat: marker.latitude, lng: marker.longitude }}
                        title={marker.description}
                    />
                ))}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;
