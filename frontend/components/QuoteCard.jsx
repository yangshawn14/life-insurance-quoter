function QuoteCard({ quote }) {
    return (
        <>
            <div key={quote.carrierId} className="max-w-md flex justify-between items-center border rounded-xl p-2">
                <h3>{quote.carrierName}</h3>
                <p className="p-px">Premium: ${quote.monthlyPremium}/mo</p>
            </div>
        </>
    );
}

export default QuoteCard;