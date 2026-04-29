import { useState } from "react";

function App() {
  const [birthdate, setBirthDate] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [quotes, setQuotes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4010/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        birthdate,
        coverageAmount
      })
    });

    const data = await response.json();
    setQuotes(data.quotes);
  };

  return (
    <>
      <form action="">
        <input type="date" value={birthdate} onChange={(e) => setBirthDate(e.target.value)} />
        <input type="number" value={coverageAmount} onChange={(e) => setCoverageAmount(e.target.value)} />
        <button type="submit" onSubmit={handleSubmit} >Get Quotes</button>
      </form>

    </>
  )
}

export default App
