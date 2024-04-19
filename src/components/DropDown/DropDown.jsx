import Dropdown from 'react-bootstrap/Dropdown';

const DropDown = ({ buttonText, items = [] }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
