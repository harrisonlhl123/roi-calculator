// calculateDepositInterest.js
export function calculateDepositsAndInterest(initialDeposit, yearlyDeposit, yearsInvested, roi) {
    const totalDeposits = initialDeposit + (yearlyDeposit * yearsInvested);
    const totalInterest = roi - totalDeposits;
    return [totalDeposits, totalInterest];
}

export function calculatePieChartData(totalDeposits, totalInterest) {
    return {
        labels: ['Total Deposits', 'Total Interest Earned'],
        datasets: [
            {
                data: [totalDeposits, totalInterest],
                backgroundColor: ['blue', 'green'],
            },
        ],
    };
}
