
function countdown() {
  const endDate = new Date("2025-08-01T00:00:00Z").getTime();
  const now = new Date().getTime();
  const diff = endDate - now;
  if (diff < 0) return document.getElementById("airdrop").innerText = "Airdrop Ended";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("airdrop").innerText = `Airdrop ends in ${days} days`;
}
setInterval(countdown, 1000);
