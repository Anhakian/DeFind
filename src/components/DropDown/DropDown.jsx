import Dropdown from 'react-bootstrap/Dropdown';
import "./DropDown.css"

const DropDown = ({ buttonText, items = [] }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" size="lg" className="dropdown-custom-1">
        {buttonText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index} href={item.href}>
            {item.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
