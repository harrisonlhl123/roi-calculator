export function calculateROI(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested) {
    const years = []; // Array to store years
    const roiValues = []; // Array to store ROI values

    for (let year = 1; year <= yearsInvested; year++) {
        // Calculate ROI for each year
        const roi = (initialDeposit * Math.pow((1 + desiredReturns/100), year)) +
                    (yearlyDeposit * (Math.pow((1 + desiredReturns/100), year) - 1) / (desiredReturns/100));
        
        // Push the year and ROI value into their respective arrays
        years.push(year);
        roiValues.push(parseFloat(roi.toFixed(2)));
    }

    // Last element in roiValues is the overall return
    const overallROI = roiValues[roiValues.length - 1];

    return {
        roi: parseFloat(overallROI.toFixed(2)),
        yearsInvested: yearsInvested,
        years: years, // Array of years
        roiValues: roiValues, // Array of ROI values
    };
}

