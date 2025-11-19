<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HonestDrop - Bitcoin Faucet Prototype</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #1a1a1a;
      color: #ff9500;
      text-align: center;
      padding: 40px;
    }
    .container {
      max-width: 400px;
      margin: auto;
      background: #262626;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    h1 { margin-bottom: 5px; }
    .subtitle {
      color: white;
      font-size: 0.9rem;
      margin-bottom: 20px;
    }
    button {
      background: #ff9500;
      color: black;
      border: none;
      padding: 12px 20px;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover { opacity: 0.85; }
    .balance, .message {
      background: #333;
      color: white;
      padding: 10px;
      border-radius: 6px;
      margin: 10px 0;
    }
    .loading-text {
      font-size: 0.85rem;
      color: #ccc;
      font-style: italic;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>HonestDrop</h1>
    <div class="subtitle">Prototype Bitcoin Faucet</div>

    <div class="balance">Balance: <span id="sats">0</span> sats</div>

    <button onclick="watchAd()">Watch Ad (Simulated)</button>
    <button onclick="withdraw()">Withdraw</button>

    <div class="message" id="message">No recent activity</div>
    <div class="loading-text" id="loading">–</div>
  </div>

  <script>
    let sats = 0;
    const loadingMessages = [
      "Vibe checking your ad energy...",
      "Calculating how not to waste your time...",
      "Pretending we're loading AI quantum sats...",
      "Channeling orange Bitcoin aura…",
      "Working harder than your coffee right now..."
    ];

    function watchAd() {
      document.getElementById('loading').innerText =
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      
      setTimeout(() => {
        sats += 20;
        document.getElementById('sats').innerText = sats;
        document.getElementById('loading').innerText = "";
        document.getElementById('message').innerText = "+20 sats earned";
      }, 1000);
    }

    function withdraw() {
      if (sats >= 1000) {
        document.getElementById('message').innerText = "Withdrawal request submitted (simulation)";
      } else {
        document.getElementById('message').innerText = "Need 1000 sats to withdraw";
      }
    }
  </script>

</body>
</html>