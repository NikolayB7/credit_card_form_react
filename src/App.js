import './App.css';
import BasicForm from "./components/BasicForm"
import Card from "./components/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
function App() {
  const [cardData, setCardData] = useState(
    {
      number: 0,
      holder: '',
      month: '',
      day: '',
      cvv: ''
    }
  )

  const [stateCard, setStateCard] = useState(false)

  const getValueForm = (data) => {
    setCardData(data)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Card stateCard={stateCard} cardInfo={cardData} />
            <div className='card-form d-flex justify-content-center'>
              <BasicForm data={cardData} focusField={setStateCard} getData={getValueForm} />
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
