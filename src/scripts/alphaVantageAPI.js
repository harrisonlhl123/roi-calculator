// Function to fetch stock data for a single symbol
async function fetchStockData(symbol) {
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=M7KM343LPLRA5F7T`); // Replace with your API endpoint
      const data = await response.json();
      const price = data['Global Quote']['05. price'];
      return { symbol, price: parseFloat(price) };
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
      return null; // Return null in case of an error
    }
  }
  
  // Function to fetch and display stock data for a list of symbols
  async function fetchAndDisplayStockData(stockSymbols) {
    const stockDataContainer = document.getElementById('watchlist-container');
  
    for (const symbol of stockSymbols) {
      const stockData = await fetchStockData(symbol);
  
      if (stockData) {
        const stockDiv = document.createElement('div');
        stockDiv.textContent = `${stockData.symbol}: $${stockData.price.toFixed(2)}`;
        stockDataContainer.appendChild(stockDiv);
      }
    }
  }
  
  // Export the fetchStockData and fetchAndDisplayStockData functions
  export { fetchStockData, fetchAndDisplayStockData };
  
