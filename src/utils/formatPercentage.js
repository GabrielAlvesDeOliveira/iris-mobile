const formatPercentage = (percentage) => {
    let percentageRounded = percentage.toFixed(1);

    return `${percentageRounded}%`;
}

export default formatPercentage;