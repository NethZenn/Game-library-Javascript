const list = document.getElementById("list");
const gameName = document.getElementById("gameName");
const gamePeak = document.getElementById("gamePeak");
const gameMid = document.getElementById("gameMid");
const gameHigh = document.getElementById("gameHigh");
const gameLow = document.getElementById("gameLow");
const totalDisplay = document.getElementById("total");
const totalSizeDisplay = document.getElementById("totalSize");
const downloadBtn = document.getElementById("submit");
const downloadProgress = document.getElementById("downloadProgress");
const launchBtn = document.getElementById("launch");
const launchProgress = document.getElementById("launchGameProgress");
const games = [
  {
    name: "GTA 5",
    rating: 7,
    genre: "Action",
    price: 20,
    size: "110GB",
    performance: true,
  },
  {
    name: "RDR 2",
    rating: 10,
    genre: "Adventure",
    price: 30,
    size: "120GB",
    performance: true,
  },
  {
    name: "Minecraft",
    rating: 9,
    genre: "Sandbox",
    price: 15,
    size: "2GB",
    performance: false,
  },
  {
    name: "COD MW2",
    rating: 8,
    genre: "FPS",
    price: 25,
    size: "15GB",
    performance: false,
  },
  {
    name: " The last of us",
    rating: 10,
    genre: "Adventure",
    price: 25,
    size: "80GB",
    performance: true,
  },
  {
    name: "Call of Duty WAW",
    genre: "FPS",
    price: 25,
    rating: 6,
    size: "5GB",
    performance: false,
  },
  {
    name: " RE 4",
    genre: "Action",
    price: 25,
    rating: 6,
    size: "10GB",
    performance: false,
  },
];

function displayGame(games) {
  list.textContent += `Name: ${games.name}, Genre: ${games.genre}, Price: ${games.price}, Rating: ${games.rating}, Size: ${games.size}, Performance: ${games.performance}`;
}
games.forEach(displayGame);

function gameNameOnly(games) {
  return (gameName.textContent += `${games.name}, `);
}
const displayGameName = games.map(gameNameOnly);

function isPeak(games) {
  return games.rating >= 8;
}
const Peak = games.filter(isPeak);
function displayPeakGame(Peak) {
  return (gamePeak.textContent += `${Peak.name}, `);
}
Peak.forEach(displayPeakGame);

function isMid(games) {
  return games.rating < 8;
}
const Mid = games.filter(isMid);
function displayMidGame(Mid) {
  return (gameMid.textContent += `${Mid.name}, `);
}
Mid.forEach(displayMidGame);

function isHighEndGame(games) {
  return games.performance === true;
}
const highEndGame = games.filter(isHighEndGame);
function displayHighEndGame(highEndGame) {
  return (gameHigh.textContent += `${highEndGame.name}, `);
}
highEndGame.forEach(displayHighEndGame);

function isLowEndGame(games) {
  return games.performance != true;
}
const lowEndGame = games.filter(isLowEndGame);
function displayLowEndGame(lowEndGame) {
  return (gameLow.textContent += `${lowEndGame.name}, `);
}
lowEndGame.forEach(displayLowEndGame);

function getPrice(games) {
  return games.price;
}
const price = games.map(getPrice);
const total = price.reduce(sum);
function sum(x, y) {
  return x + y;
}
totalDisplay.textContent = `${total}$`;

function getSize(games) {
  return Number(games.size.replace("GB", ""));
}
const size = games.map(getSize);
const sizeTotal = size.reduce(sumSize);
function sumSize(x, y) {
  return x + y;
}
totalSizeDisplay.textContent = `${sizeTotal}GB`;

downloadBtn.onclick = download;
function download() {
  downloadProgress.textContent = "Downloading is Start";

  setTimeout(() => {
    downloadProgress.textContent = "Your Game is Downloading";
  }, 2000);

  setTimeout(() => {
    downloadProgress.textContent = "Your Game is Downloaded";
  }, 3000);
}

launchBtn.onclick = launch;
function launch() {
  launchProgress.textContent = "Starting Launcher";

  setTimeout(() => {
    launchProgress.textContent = "Loading Game file";
  }, 2000);

  setTimeout(() => {
    launchProgress.textContent = "Game Launched";
  }, 3000);
}
