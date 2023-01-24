import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { monthList } from '../data/month'
import eye from "../images/eye.svg"
function BasicForm({ getData, data, focusField }) {

    // let [countDay, setCountDay] = useState(0)
    let [visiblePass, setVisiblePass] = useState(false)

    let { number, holder, month, day, cvv } = data

    let monthArr = Object.values(monthList)

    // const monthDay = () => monthList[month].days

    // useEffect(() => {
    //     if (month.length) {
    //         setCountDay(monthDay())
    //     }
    // });

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formNum">
                <Form.Label className='text-left w-100'>Card number</Form.Label>
                <Form.Control
                    maxLength="16"
                    minLength="16"
                    value={number}
                    onChange={(e) => getData({ ...data, number: e.target.value })}
                    type="text"
                    placeholder="Enter number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHolder">
                <Form.Label className='text-left w-100'>Card holder</Form.Label>
                <Form.Control
                    maxLength="16"
                    minLength="7"
                    type="text"
                    value={holder}
                    onChange={(e) => getData({ ...data, holder: e.target.value })}
                    placeholder="Enter name" />
            </Form.Group>


            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formMonth">
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
                    <Form.Group className="mb-3" controlId="formDay">
                        <Form.Label className='text-left w-100'>Day</Form.Label>
                        <Form.Select
                            value={day}
                            onChange={(e) => getData({ ...data, day: e.target.value })}
                        >
                            <option>Enter day</option>
                            {/* {
                                for (let i=0, i<10, i++){
                                <b>{i}</b>
                            }
                            } */}


                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 password-field" controlId="formHolder">
                        <Form.Label className='text-left w-100'>CVV</Form.Label>
                        <Form.Control
                            maxLength="3"
                            value={cvv}
                            onFocus={(e) => focusField(true)}
                            onBlur={(e) => focusField(false)}
                            onChange={(e) => getData({ ...data, cvv: e.target.value })}
                            type={`${visiblePass ? `number` : `password`}`}
                            placeholder="Enter code" />
                        <button
                            className='show-password'
                            type="button"
                            onClick={() => { setVisiblePass(!visiblePass) }}
                        >
                            <img src={eye} alt="" />
                        </button>
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