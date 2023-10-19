export function calculateROI(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested) {
    const roi = (initialDeposit * Math.pow((1 + desiredReturns/100), yearsInvested)) +
                (yearlyDeposit * (Math.pow((1 + desiredReturns/100), yearsInvested) - 1) / (desiredReturns/100));

    return {
        roi: roi.toFixed(2),
        yearsInvested: yearsInvested,
    };
}