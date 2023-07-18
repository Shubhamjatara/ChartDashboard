
import { Container, Row, Col } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import Pie from './chartsComponents/Piechart';
import DoughnutChart from './chartsComponents/doughnutChart';
import BarChart from './chartsComponents/BarChart';
import LineChart from './chartsComponents/lineChart';
import AreaChart from './chartsComponents/area';
import BubbleChart from './chartsComponents/BubbleChart';
function App() {
  return (
    <div>
      <Container className=' mt-2 p-0'>
        <Row className='justify-content-center align-items-center'>
          <Col className='justify-content-center align-items-center d-flex'>
            <Pie />
          </Col>
          <Col className='justify-content-center align-items-center d-flex'>
            <DoughnutChart />
          </Col>

          <Col className='justify-content-center align-items-center d-flex'>
          <DoughnutChart />
          </Col>
        
        </Row>

        <Row className='mt-4 '>
          <Col className='justify-content-center align-items-center d-flex'>
          <BarChart/>
          </Col>

          <Col className='justify-content-center align-items-center d-flex' >
          <LineChart />
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col className='justify-content-center align-items-center d-flex'>
            <AreaChart/>
          </Col>

          <Col className='justify-content-center align-items-center d-flex' >
          <BubbleChart />
          </Col>
        </Row>



      </Container>
    </div>

  );
}

export default App;
