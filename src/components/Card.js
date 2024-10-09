'use client';

import { Card } from 'react-bootstrap';

export default function PeopleCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* <Card.Image variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
