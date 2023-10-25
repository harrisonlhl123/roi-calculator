// watchlist.js

const stockList = [
    { symbol: 'AAPL', price: 150.25 },
    { symbol: 'GOOGL', price: 2715.32 },
    { symbol: 'AMZN', price: 3405.89 },
    { symbol: 'MSFT', price: 299.67 },
    { symbol: 'TSLA', price: 677.21 },
    { symbol: 'FB', price: 345.65 },
    { symbol: 'NVDA', price: 191.45 },
    { symbol: 'ADBE', price: 635.28 },
    { symbol: 'NFLX', price: 609.63 },
    { symbol: 'PYPL', price: 275.50 },
    { symbol: 'JPM', price: 151.40 },
    { symbol: 'V', price: 235.61 },
    { symbol: 'GS', price: 402.89 },
    { symbol: 'DIS', price: 170.34 },
    { symbol: 'VZ', price: 54.29 },
    { symbol: 'KO', price: 56.48 },
    { symbol: 'NKE', price: 157.14 },
    { symbol: 'MCD', price: 233.02 },
    { symbol: 'PFE', price: 44.50 },
    { symbol: 'MRK', price: 81.98 },
];


function displayStockList() {
    const watchlistContainer = document.getElementById('watchlist-container');

    stockList.forEach((stock) => {
        const stockElement = document.createElement('div');
        watchlistContainer.appendChild(stockElement);

        // Initialize the text content with the stock info
        stockElement.textContent = `${stock.symbol}: $${stock.price.toFixed(2)}`;
        stockElement.style.color = getRandomColor(); // Initialize with a random color

        // Function to get a random color (red or green)
        function getRandomColor() {
            return Math.random() < 0.5 ? 'red' : 'green';
        }

        // Function to simulate price changes
        function simulatePriceChange() {
            // Simulate a price change of up to 5% (adjust the factor as needed)
            const priceChangeFactor = 1 + (Math.random() - 0.5) * 0.1;
            stock.price *= priceChangeFactor;
            stockElement.textContent = `${stock.symbol}: $${stock.price.toFixed(2)}`;
        }

        // Change text color and simulate price change at random intervals
        setInterval(() => {
            stockElement.style.color = getRandomColor();
            simulatePriceChange();
        }, 10000 + Math.random() * 20000); // Random interval between 3 and 8 seconds
    });
}

export { displayStockList };



