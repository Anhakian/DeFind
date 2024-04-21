import MapComponent from "../MapComponent/MapComponent";
import FeatureList from "../FeatureList/FeatureList";
import Container from 'react-bootstrap/Container'

const MapView = () => {
    
    return (
        <div>
            <Container className='map'>
                <MapComponent />
            </Container>
            <div className='feature-list'>
                <FeatureList />
            </div>
        </div>
    )
}
export default MapView;