export function calculateROIOtherAssets(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested) {
    const roi3 = (initialDeposit * Math.pow((1 + desiredReturns/100), yearsInvested)) +
    (yearlyDeposit * (Math.pow((1 + desiredReturns/100), yearsInvested) - 1) / (desiredReturns/100));

    return {
        roi3: roi3.toFixed(2),
        yearsInvested3: yearsInvested
    }
}