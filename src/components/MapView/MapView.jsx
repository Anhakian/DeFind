import MapComponent from "../MapComponent/MapComponent";
import FeatureList from "../FeatureList/FeatureList";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './MapView.css'
import Navbar from '../Navbar/Navbar';

const MapView = () => {
    return (
        <div>
            <Navbar className='navbar' />
        <div className='MapView'>
            <div className='mapContainer'>
                <MapComponent />
            </div>
                <FeatureList className='featureList'/>
        </div>
        </div>
    )
}
export default MapView;