'use client';

import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function PeopleCard({ peopleObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={peopleObj.picture.medium} />
        <Card.Title>
          {peopleObj.name.first} {peopleObj.name.last}
        </Card.Title>
        <Card.Text>{peopleObj.location.country}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

PeopleCard.propTypes = {
  peopleObj: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    location: PropTypes.shape({
      country: PropTypes.string,
    }),
    picture: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }).isRequired,
};
