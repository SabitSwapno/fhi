// Function to increment coins for a team
function incrementCoins(team) {
    let coins = parseInt(document.getElementById(team + 'Coins').textContent);
    coins += 1;
    document.getElementById(team + 'Coins').textContent = coins;
    saveData(team, coins);
}

// Function to decrement coins for a team
function decrementCoins(team) {
    let coins = parseInt(document.getElementById(team + 'Coins').textContent);
    coins -= 1;
    document.getElementById(team + 'Coins').textContent = coins;
    saveData(team, coins);
}

// Function to save data to local storage
function saveData(team, coins) {
    localStorage.setItem(team, coins);
}

// Function to load data from local storage
function loadData() {
    for (let i = 1; i <= 3; i++) {
        let team = 'team' + i;
        let coins = localStorage.getItem(team);
        if (coins !== null) {
            document.getElementById(team + 'Coins').textContent = coins;
        }
    }
}

// Load data when the page is refreshed
loadData();
