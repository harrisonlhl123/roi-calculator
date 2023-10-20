// Reuse the calculateROI function from stocks.js
export function calculateROICashAndBonds(initialDeposit2, yearlyDeposit2, desiredReturns2, yearsInvested2) {
    const years2 = []; // Array to store years
    const roiValues2 = []; // Array to store ROI values

    for (let year2 = 1; year2 <= yearsInvested2; year2++) {
        // Calculate ROI for each year
        const roi2 = (initialDeposit2 * Math.pow((1 + desiredReturns2 / 100), year2)) +
            (yearlyDeposit2 * (Math.pow((1 + desiredReturns2 / 100), year2) - 1) / (desiredReturns2 / 100));
        
        // Push the year and ROI value into their respective arrays
        years2.push(year2);
        roiValues2.push(parseFloat(roi2.toFixed(2)));
    }

    // Calculate the overall ROI for all years and return it
    const overallROI2 = roiValues2[roiValues2.length - 1];

    return {
        roi2: parseFloat(overallROI2.toFixed(2)),
        yearsInvested2: yearsInvested2,
        years2: years2, // Array of years
        roiValues2: roiValues2, // Array of ROI values
    };
}

