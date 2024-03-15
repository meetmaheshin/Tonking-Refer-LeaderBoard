fetch('http://216.48.184.198:8085/tonk/user/referral-count-data?fromDate=1710181800000&toDate=1710268199000')
  .then(response => response.json())
  .then(data => {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';

    data.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${tgUserId}</td>
        <td>${user.score}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
