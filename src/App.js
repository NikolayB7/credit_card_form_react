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
      number: '',
      holder: '',
      month: '',
      // day:'',
      // cvv:0
    }
  )

  const getValueForm = (data) => {
    setCardData(data)
  }

  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Card cardInfo={cardData} />
            <div className='card-form d-flex justify-content-center'>
              <BasicForm data={cardData} getData={getValueForm} />
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
