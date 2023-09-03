import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function WithHeaderStyledExample(props) {
  return (
    <Card className='cont'>
      <Card.Header as="h5"></Card.Header>
      
      <Card.Body>
        <Card.Title>{props.info.trainName} <Badge bg="secondary">Train No:{props.info.trainNumber}</Badge> </Card.Title>
        <Card.Title>
    
        <Stack className='cen' direction="vertical"  gap={2}>
      <Badge bg="danger">Seat Availability : AC : {props.info.seatsAvailable.AC} </Badge><Badge bg="danger">Seat Availability : Sleeper : {props.info.seatsAvailable.sleeper}</Badge>
      
        </Stack>
        <br/>
        <Stack className='cen' direction="horizontal"  gap={2}>
            <Badge bg="warning" text="dark">
            AC Seat Price : {props.info.price.AC}
        </Badge>
        <Badge bg="warning" text="dark">
            Sleeper Seat Price : {props.info.price.sleeper}
        </Badge>
        </Stack>
        </Card.Title>
        <Card.Text>
         Train Delayed By {props.info.delayedBy} Hours
        </Card.Text>
        <Button onClick={()=>{props.f(); props.l()}} variant="primary">Show More</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;