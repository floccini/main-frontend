import List from 'microfront/List';
import Input from 'microfront/Input';
import { useState } from 'react';

const Content = () => {
  const [items, setItems] = useState<string[]>([]);

  return (
    <main
      style={{
        padding: '25px',
        flexGrow: 1,
        backgroundColor: '#333333',
        color: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '20px' }}
      >
        Tasks
      </h2>
      <div
        style={{
          padding: '15px',
          backgroundColor: '#444444',
          borderRadius: '12px',
          boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Input setItems={setItems} />
        <List items={items} />
      </div>
    </main>
  );
};

export default Content;
