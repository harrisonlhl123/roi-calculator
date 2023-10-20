export function calculateROICashAndBonds(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested) {
    const roi2 = (initialDeposit * Math.pow((1 + desiredReturns/100), yearsInvested)) +
                (yearlyDeposit * (Math.pow((1 + desiredReturns/100), yearsInvested) - 1) / (desiredReturns/100));

    return {
        roi2: roi2.toFixed(2),
        yearsInvested2: yearsInvested,
    };
}