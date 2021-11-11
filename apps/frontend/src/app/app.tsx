import { useEffect, useState } from 'react';

export function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('/api');
      const { message } = await response.json();

      setMessage(message);
    };

    loadData();
  }, []);

  return (
    <>
      <h1>A message from the backend: </h1>
      <p>{message}</p>
    </>
  );
}

export default App;
