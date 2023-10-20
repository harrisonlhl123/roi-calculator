export function calculateROIOtherAssets(initialInvestment, annualContribution, desiredReturns, yearsInvested) {
    const years = [];
    const roiValues = [];

    for (let year = 1; year <= yearsInvested; year++) {
        // Calculate ROI for each year
        const roi = (initialInvestment * Math.pow((1 + desiredReturns / 100), year)) +
                    (annualContribution * (Math.pow((1 + desiredReturns / 100), year) - 1) / (desiredReturns / 100));

        years.push(year);
        roiValues.push(parseFloat(roi.toFixed(2)));
    }

    const overallROI = roiValues[roiValues.length - 1];

    return {
        roi: parseFloat(overallROI.toFixed(2)),
        yearsInvested: yearsInvested,
        years: years,
        roiValues: roiValues,
    };
}
