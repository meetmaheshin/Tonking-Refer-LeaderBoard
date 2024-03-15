fetch('https://your-api-endpoint.com/users')
  .then(response => response.json())
  .then(data => {
    const sortedData = data.sort((a, b) => b.referralCount - a.referralCount);
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';

    sortedData.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.tgUserId}</td>
        <td>${user.referralCount}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
