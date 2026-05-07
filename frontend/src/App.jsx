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
      <div className="flex flex-col min-h-screen p-6 gap-6">
        <div className="mx-auto border p-4 rounded-xl">
          <h1 className="text-2xl text-white bg-blue-500 px-3 py-4 rounded-lg">Instant Life Insurance Quoter</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full max-w-md bg-white shadow-md rounded-xl px-3 py-4 border"
            />

            <input
              type="number"
              value={coverageAmount}
              onChange={(e) => setCoverageAmount(e.target.value)}
              className="w-full max-w-md bg-white shadow-md rounded-xl px-3 py-4 border"
              placeholder="50000"
            />

            <button
              type="submit"
              className="max-w-md text-white text-xl bg-blue-500 shadow-md rounded-xl py-4">
              Get Quotes
            </button>

          </form>
        </div>


        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="w-150 mx-auto flex flex-col gap-2">
          <h2>Quotes:</h2>
          {quotes.map((quote) => (
            <div key={quote.carrierId} className="max-w-md flex flex-col border rounded-xl p-2">
              <h3>{quote.carrierName}</h3>
              <p>Monthly Premium: ${quote.monthlyPremium}</p>
            </div>
          ))}
        </div>


      </div>


    </>
  )
}

export default App
