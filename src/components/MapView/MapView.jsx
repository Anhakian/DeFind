import './MapView.css'
import Navbar from '../Navbar/Navbar';
import DropDown from '../DropDown/DropDown';
import MapComponent from "../MapComponent/MapComponent";
import FeatureList from "../FeatureList/FeatureList";



const MapView = () => {
    const button1 = "Academic Buildings";
    const button2 = "Non-academic Buildings"
    const academic = [
    { text: 'Roy O. West Library', value: 'Roy' },
    { text: 'Julian', value: 'Julian' },
    { text: 'GCPA', value: 'GCPA' } ];

    const non_academic = [
    { text: 'Hoover Dining Hall', value: 'Hoover' },
    { text: 'Mason Hall', value: 'Mason' }
    ];

    return (
        <div className="MapView">
            <Navbar className='navbar' />
            <div className='mapView'>
                <div className='mapContainer'>
                    <MapComponent />
                </div>
                <div className='list'>
                    <FeatureList className='featureList'/>
                </div>
            </div>
            <div className='dropdown'>
                <p className='display'><h2>Find the accessibility options in other buildings</h2></p>
                <div className="dropdown-container">
                    <div className="drop-down-btn1">
                        <DropDown buttonText={button1} items={academic} baseUrl="map"/> 
                    </div>
                    <div className="drop-down-btn2">
                        <DropDown buttonText={button2} items={non_academic} baseUrl="map"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MapView;