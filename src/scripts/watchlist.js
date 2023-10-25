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
    { symbol: 'PYPL', price: 275.50 }
];

function displayStockList() {
    const watchlistContainer = document.getElementById('watchlist-container');

    stockList.forEach((stock) => {
        const stockElement = document.createElement('div');
        stockElement.textContent = `${stock.symbol}: $${stock.price}`;
        watchlistContainer.appendChild(stockElement);
    });
}

export { displayStockList };
