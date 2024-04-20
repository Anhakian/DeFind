import Navbar from "../Navbar/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css'

const Resources = () => {
    return (
        <div>
            <Navbar />
                <div className="form">
                    <div className="form-title">
                        <h2><strong>New Accessibility Information Form</strong></h2>
                        <div className="detailed-form">
                            <Form>
                                <Form.Group className="mb-3" controlId="form.Name">
                                    <Form.Label>Contributor Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="form.AccessibilityOption">
                                <Form.Label>Accessibility Feature Type</Form.Label>
                                    <Form.Select>
                                        <option value="">Select an option</option>
                                        <option value="1">Automatic Door</option>
                                        <option value="2">Elevator</option>
                                        <option value="3">Ramp</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="form.FileMultiple" >
                                    <Form.Label>Photos/Videos</Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                                    <Form.Label>Descriptions</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter descriptions..." />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        
                    </div>
                   
                </div>
        </div>
    )
}
export default Resources