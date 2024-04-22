import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import './MapComponent.css'

const MapComponent = () => {
    const { building } = useParams();
    const [markers, setMarkers] = useState([]);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [hoveredMarker, setHoveredMarker] = useState(null); // Track hovered marker
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
            const markersData = snapshot.docs.map(doc => {
                const data = doc.data();
                const position = {
                    lat: data.position.latitude,
                    lng: data.position.longitude
                };
                return {
                    id: doc.id,
                    position: position,
                    description: data.description
                };
            });
            return markersData;
        };

        fetchMarkers().then(data => {
            setMarkers(data);
        });
    }, [building, mapLoaded]);

    if (!mapLoaded) {
        return <div>Loading...</div>;
    }

    const findCoords = (building) => {
        let coords = { lat: 0, lng: 0 };
        switch (building) {
            case 'Roy':
                coords = { lat: 39.64083714045813, lng: -86.86383189084128 };
                return coords;
    
            case 'Julian':
                coords = { lat: 39.6385157522859, lng: -86.86331682472607 };
                return coords;
    
            case 'GCPA':
                coords = { lat: 39.63791543297591, lng: -86.86170944284544 };
                return coords;
    
            case 'Lucy':
                coords = { lat: 39.63928281072111, lng: -86.86008670645705 };
                return coords;
    
            case 'Hoover':
                coords = {lat: 39.639488223587335, lng: -86.8621449549798};
                return coords;
    
            case 'Mason':
                coords = {lat: 39.639752606922414, lng: -86.8599696835164};
                return coords;
    
            default:
                coords = {lat: 39.63961948719088, lng: -86.86339118772831 };
                return coords;
        }
    };

    return (
        <div className='map'>
            <GoogleMap
                center={findCoords(building)}
                zoom={19}
                mapContainerStyle={{ width: '100%', height: '500px' }}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        onMouseOver={() => setHoveredMarker(marker)}
                        onMouseOut={() => setHoveredMarker(null)}
                    >
                        {hoveredMarker === marker && ( 
                            <InfoWindow position={marker.position}>
                                <div>{marker.description}</div>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;
