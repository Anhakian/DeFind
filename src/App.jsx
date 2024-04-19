import Navbar from './components/Navbar/Navbar'
import HomepageIntro from './components/HomepageIntro/HomepageIntro'
import './App.css'
import Dropdown from './components/DropDown/DropDown'

const App = () => {
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
    <>
      <div className='App'>
          <Navbar />
          <HomepageIntro />
          <Dropdown buttonText={button1} items={academic}/>
          <Dropdown buttonText={button2} items={non_academic}/>
      </div>
    </>
  )
}

export default App
