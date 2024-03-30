const twitterData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Number of Tweets',
        data: [1200, 1300, 1100, 1400, 1500],
        backgroundColor: 'rgba(29, 161, 242, 0.5)', // Twitter's primary color
        borderColor: 'rgba(29, 161, 242, 1)', // Twitter's primary color
        borderWidth: 1
    }]
};

// Create histogram
const twitterCtx = document.getElementById('twitterChart').getContext('2d');
const twitterChart = new Chart(twitterCtx, {
    type: 'bar',
    data: twitterData,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return value.toLocaleString(); // Format y-axis labels with comma separator
                    }
                }
            }]
        }
    }
});
