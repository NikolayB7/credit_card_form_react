import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { monthList } from '../data/month'
function BasicForm({ getData, data }) {

    let { number, holder, month } = data

    let monthArr = Object.values(monthList)


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formNum">
                <Form.Label className='text-left w-100'>Card number</Form.Label>
                <Form.Control
                    value={number}
                    onChange={(e) => getData({ ...data, number: e.target.value })}
                    type="text"
                    placeholder="Enter number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHolder">
                <Form.Label className='text-left w-100'>Card holder</Form.Label>
                <Form.Control
                    type="text"
                    value={holder}
                    onChange={(e) => getData({ ...data, holder: e.target.value })}
                    placeholder="Enter name" />
            </Form.Group>


            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formHolder">
                        <Form.Label className='text-left w-100'>Month</Form.Label>
                        <Form.Select
                            value={month}
                            onChange={(e) => getData({ ...data, month: e.target.value })}>
                            <option>Enter month</option>
                            {monthArr.map(el => <option value={el.short} key={el.number}>{el.name}</option>)}
                        </Form.Select>
                    </Form.Group>

                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formHolder">
                        <Form.Label className='text-left w-100'>Day</Form.Label>
                        <Form.Select>
                            <option>Enter day</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formHolder">
                        <Form.Label className='text-left w-100'>CVV</Form.Label>
                        <Form.Control type="text" placeholder="Enter code" />
                    </Form.Group>
                </Col>
            </Row>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicForm;