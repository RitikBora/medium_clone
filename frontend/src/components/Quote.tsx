const Quote = () =>
{
  const quotes = [
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to discover the limits of the possible is to go beyond them into the impossible."
];


    return (<>
        <div className="bg-gray-100 h-full flex justify-center items-center">
            <div className="px-32">
              <h1 className="text-3xl font-bold">{quotes[Math.floor(Math.random() * 8)]}</h1>
              <br />
              <p className="font-bold text-m "> Ritik Bora</p>
              <p className="text-sm">CEO, Readium.inc</p>
            </div>
          </div>
    </>)
}

export default Quote;