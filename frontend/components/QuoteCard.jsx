function QuoteCard({ quote }) {
    return (
        <>
            <div key={quote.carrierId} className="max-w-md flex flex-col border rounded-xl p-2">
                <h3>{quote.carrierName}</h3>
                <p>Monthly Premium: ${quote.monthlyPremium}</p>
            </div>
        </>
    );
}

export default QuoteCard;