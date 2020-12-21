import React, { useEffect, useState } from 'react';
import ApiClient from './../../domain/example/ExampleApiClient';
import { Example } from './../../domain/example/Example';

export const Home: React.FC = () => {
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  async function getHelloWorld() {
    try {
      const resp = await ApiClient.getExample();
      const result = new Example(resp); // Data mapping to expected interface

      setGreeting(result.greeting);
      setIsLoading(false);
    } catch (e) {
      // LogError fallback code
    } finally {
      // Regardless of exception code to run after try
    }
  }

  useEffect(() => {
    getHelloWorld();
  }, []);

  return (
    <div>
      <h1>
        React Boilerplate Homepage
      </h1>
      <p>
        Asynchronous greeting: <strong>{isLoading ? 'Loading...' : greeting}</strong>
      </p>
    </div>
  );
};
