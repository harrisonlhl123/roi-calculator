async function fetchStockData(symbol) {
    try {
      // Replace 'YOUR_API_KEY' with your actual MarketStack API key
      const apiKey = '29f060f4bbd7afdf7eab21fb87c04bdc';
  
      // Set the 'Https' option to false to make an HTTP request
      const options = { ApiToken: apiKey, Https: false };
  
      const response = await fetch(`http://api.marketstack.com/v1/eod?access_key=${apiKey}&symbols=${symbol}`, options);
  
      const data = await response.json();
  
      // Check if there was an error in the response
      if (response.status !== 200) {
        throw new Error(`Error fetching data for ${symbol}: ${data.error.message}`);
      }
  
      // Extract the price from the response
      const stockData = data.data[0]; // Assuming you want the latest data
      const price = stockData.close;
  
      return { symbol, price };
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
      return null; // Return null in case of an error
    }
}
  

async function fetchAndDisplayStockData(fetchStockDataFunction, symbol) {
    // const stockSymbols = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA", "FB", "NVDA", "ADBE", "NFLX", "PYPL"];
    // Remove the predefined list of stock symbols
  
    const stockDataContainer = document.getElementById('watchlist-container');
  
    // Use the user-provided symbol
    const stockData = await fetchStockDataFunction(symbol);
  
    if (stockData) {
      const stockDiv = document.createElement('div');
      stockDiv.textContent = `${stockData.symbol}: $${stockData.price}`;
      stockDataContainer.appendChild(stockDiv);
    }
}
  

export { fetchStockData, fetchAndDisplayStockData };

