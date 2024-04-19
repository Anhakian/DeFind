import HomepageImage from '../HomepageImage/HomepageImage';
import './HomepageIntro.css'
import '../DropDown/DropDown'
import DropDown from '../DropDown/DropDown';

const HomepageIntro = () => {
    const button1 = "Academic Buildings";
      const button2 = "Non-academic Buildings"
      const academic = [
        { text: 'Roy O. West Library', href: '' },
        { text: 'Julian', href: '' },
        { text: 'GCPA', href: '' } ];
  
      const non_academic = [
        { text: 'Lucy Rowland Hall', href: '' },
        { text: 'Hoover Dining Hall', href: '' },
        { text: 'Mason Hall', href: '' }
      ];
    return (
        <div className='homepage-intro' id = "homepage-intro">
            <div className='homepage-title'>
                <h1><strong>DeFind</strong></h1>
                <p><h2>Find the accessibility options<br /> you need</h2></p>
                <div className="dropdown-container">
                    <div className="drop-down-btn1">
                        <DropDown buttonText={button1} items={academic}/> 
                    </div>
                    <div className="drop-down-btn2">
                        <DropDown buttonText={button2} items={non_academic}/>
                    </div>
                </div>
            </div>
            <div className="homepage-image">
                <HomepageImage />
            </div>
        </div>
        
    );
}
export default HomepageIntro