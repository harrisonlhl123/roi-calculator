// barGraph.js

export function createBarGraph(data, containerId) {
    // Define your bar graph creation code here
    // This function takes data and a containerId as arguments
    // and creates the bar graph within the specified container.
    
    // Select the container element
    const container = d3.select(`#${containerId}`);
  
    // Define dimensions and margins
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
  
    // Create an SVG element for the graph
    const svg = container
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
    // Define scales for x and y
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.year))
      .range([0, width])
      .padding(0.1);
  
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]);
  
    // Create the bars
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.year))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.value))
      .attr("fill", "steelblue");
  
    // Create x-axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  
    // Create y-axis
    svg.append("g")
      .call(d3.axisLeft(yScale));
  
    // Add labels and titles
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + 40)
      .style("text-anchor", "middle")
      .text("Years");
  
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -30)
      .style("text-anchor", "middle")
      .text("Value");
  }
  