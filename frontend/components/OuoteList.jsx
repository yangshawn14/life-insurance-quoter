import QuoteCard from "./QuoteCard";

function QuoteList({ quotes }) {
    return (
        <>
            <div className="max-w-md mx-auto flex flex-col gap-2">
                <h2>Quotes:</h2>
                {quotes.map((quote) => (
                    <QuoteCard quote={quote} />
                ))}
            </div>
        </>
    );
}

export default QuoteList;