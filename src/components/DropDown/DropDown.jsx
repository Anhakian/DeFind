import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import "./DropDown.css"

const DropDown = ({ buttonText, items = [], baseUrl }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" size="lg" className="dropdown-custom-1">
        {buttonText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Link to={`/${baseUrl}/${item.value}`} key={index} className="dropdown-item">{item.text}</Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
