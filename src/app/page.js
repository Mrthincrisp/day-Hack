'use client';

import { useEffect, useState } from 'react';
import PeopleCard from '../components/Card';

function Home() {
  const [people, setPeople] = useState([]);
  const getPeople = async () => {
    const main = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch('https://randomuser.me/api/?results=8', main);
    const jsonResponse = await response.json();
    setPeople(jsonResponse.results);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {people.map((person) => (
        <PeopleCard key={person.login.uuid} peopleObj={person} />
      ))}
    </div>
  );
}

export default Home;
