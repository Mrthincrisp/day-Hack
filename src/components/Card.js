'use client';

import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function PeopleCard({ peopleObj }) {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite((prevState) => !prevState);
  };
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
        <Button as="input" type="button" value={favorite ? '+' : '-'} onClick={handleClick} />{' '}
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
