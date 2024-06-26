import Navbar from "../Navbar/Navbar";
import DropDown from '../DropDown/DropDown';
import './Contribute.css'
const Contribute = () => {
    const button1 = "Academic Buildings";
    const button2 = "Non-academic Buildings"
    const academic = [
        { text: 'Roy O. West Library', value: 'Roy' },
        { text: 'Julian', value: 'Julian' },
        { text: 'GCPA', value: 'GCPA' } 
    ];
  
    const non_academic = [
        { text: 'Hoover Dining Hall', value: 'Hoover' },
        { text: 'Mason Hall', value: 'Mason' }
    ];

    return (
        <div>
            <Navbar />
            <div className="contribute-page">
                <div className="contribute-title">
                <h2 className="con-title"><strong>Choose the building that you want to contribute to:</strong></h2>
                </div>
                <div className="dropdown-container2">
                    <div className="drop-down-btn3">
                        <DropDown buttonText={button1} items={academic} baseUrl="contribute"/> 
                    </div>
                    <div className="drop-down-btn4">
                        <DropDown buttonText={button2} items={non_academic} baseUrl="contribute"/>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Contribute