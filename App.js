import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    socket.on('document', (data) => {
      setContent(data);
    });

    return () => {
      socket.off('document');
    };
  }, []);

  const handleChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    socket.emit('edit', newContent);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Collaborative Document Editor</h1>
      <textarea
        value={content}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '500px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}

export default App;