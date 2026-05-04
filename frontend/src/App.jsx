import { useState } from "react";

function App() {
  const [birthdate, setBirthDate] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [quotes, setQuotes] = useState([]);
  // Add loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    // test
    console.log("Submitting form...");
    console.log(birthdate, coverageAmount);

    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
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

      // Manually handle failed HTTP responses
      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }

      const data = await response.json();

      setQuotes(data.quotes);

    } catch (err) {
      console.log(err);
      setError("Could not show quotes. Please try again.");
    } finally {
      setLoading(false);
    }


  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <input
          type="number"
          value={coverageAmount}
          onChange={(e) => setCoverageAmount(e.target.value)}
        />

        <button type="submit" >Get Quotes</button>

      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {quotes.map((quote) => (
        <div key={quote.carrierId}>
          <h3>{quote.carrierName}</h3>
          <p>${quote.monthlyPremium}</p>
        </div>
      ))}

    </>
  )
}

export default App
