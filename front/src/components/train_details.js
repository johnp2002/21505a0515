import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function WithHeaderStyledExample(props) {
  return (
    <Card className='cont'>
      <Card.Header as="h5"></Card.Header>
      
      <Card.Body>
        {/* train name and train number  element */}
        <Card.Title className='hd'>{props.info.trainName} <Badge bg="secondary">Train No:{props.info.trainNumber}</Badge> </Card.Title>
        <Card.Title>
    
        <Stack className='cen' direction="vertical"  gap={2}>
            {/* seat availabilty of trains */}
      <Badge bg="danger">Seat Availability : AC : {props.info.seatsAvailable.AC} </Badge><Badge bg="danger">Seat Availability : Sleeper : {props.info.seatsAvailable.sleeper}</Badge>
      
        </Stack>
        <br/>
        <Stack className='cen' direction="horizontal"  gap={2}>
            <Badge bg="warning" text="dark">
                {/* sleeper seat price  element`` */}
            AC Seat Price : {props.info.price.AC}
        </Badge>
        <Badge bg="warning" text="dark">
            {/* ac seat price element`` */}
            Sleeper Seat Price : {props.info.price.sleeper}
        </Badge>
        </Stack>
        <br/>
        <Stack className='cen' direction="horizontal"  gap={2}>
            <Badge bg="warning" text="dark">
            Depature Time : { props.info.departureTime.Hours} hours Left
        </Badge>
        </Stack>
        </Card.Title>
        <Card.Text>
         Train Delayed By {props.info.delayedBy} Hours
        </Card.Text>
        <Button className='btn' onClick={()=>{props.f(); props.l()}} variant="primary">Show More</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;