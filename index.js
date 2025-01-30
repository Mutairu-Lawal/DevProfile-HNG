document.addEventListener('DOMContentLoaded', () => {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];

    document.getElementById(
      'currentTimeUTC'
    ).textContent = `Current Time (UTC): ${utcTime}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
