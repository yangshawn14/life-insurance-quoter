function QuoteList({ quotes }) {
    return (
        <>
            <div className="w-150 mx-auto flex flex-col gap-2">
                <h2>Quotes:</h2>
                {quotes.map((quote) => (
                    <div key={quote.carrierId} className="max-w-md flex flex-col border rounded-xl p-2">
                        <h3>{quote.carrierName}</h3>
                        <p>Monthly Premium: ${quote.monthlyPremium}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default QuoteList;