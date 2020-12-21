import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  id: string;
}

export const Contact: React.FC = () => {
  const { id }: Params = useParams();

  return (
    <div>
      <h1>Boilerplate Contact page</h1>
      <p>Contact ID: {id}</p>
    </div>
  );
};
