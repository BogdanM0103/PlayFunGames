import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="game">
    <h1 class="game-title">Rock-Paper-Scissors</h1>

    <div class="cards">
      <div class="player-card" id="p1Card">
        <h2>Player 1</h2>
        <div class="status" id="p1Status">Waiting...</div>
      </div>

      <div class="player-card" id="p2Card">
        <h2>Player 2</h2>
        <div class="status" id="p2Status">Waiting...</div>
      </div>
    </div>
  </div>
`
