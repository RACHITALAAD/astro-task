import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! 👋 Thank you for visiting!</h3>
      <button 
      style={{
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          backgroundColor: "#4c1d95",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "0.5rem"
        }}
      onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}