let filesTotal = 0;
let filesNeeded = 0;

// GMod calls this automatically when connecting
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language) {
    document.getElementById('mapName').innerText = "Deploying to: " + mapname;
}

// GMod calls this when a file is downloading
function DownloadingFile(fileName) {
    document.getElementById('fileText').innerText = "Downloading: " + fileName;
}

// GMod calls this when the loading status updates
function SetStatusChanged(status) {
    document.getElementById('statusText').innerText = status;
}

function SetFilesTotal(total) {
    filesTotal = total;
}

function SetFilesNeeded(needed) {
    filesNeeded = needed;
    updateProgress();
}

function updateProgress() {
    if (filesTotal > 0) {
        let filesDownloaded = filesTotal - filesNeeded;
        let percentage = (filesDownloaded / filesTotal) * 100;
        document.getElementById('progressBar').style.width = percentage + "%";
    }
}
