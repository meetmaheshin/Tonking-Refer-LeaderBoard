fetch('https://your-api-endpoint.com/users')
  .then(response => response.json())
  .then(data => {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';

    data.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.score}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
