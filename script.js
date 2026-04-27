let filesTotal = 0;
let filesNeeded = 0;

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language) {
    document.getElementById('status').innerText = "Connecting to " + servername + " | Map: " + mapname;
}

function SetFilesTotal(total) {
    filesTotal = total;
}

function DownloadingFile(fileName) {
    document.getElementById('status').innerText = "Downloading: " + fileName;
}

function SetStatusChanged(status) {
    document.getElementById('status').innerText = status;
}

function SetFilesNeeded(needed) {
    filesNeeded = needed;
    updateProgress();
}

function updateProgress() {
    if (filesTotal > 0) {
        let downloaded = filesTotal - filesNeeded;
        let percentage = (downloaded / filesTotal) * 100;
        document.getElementById('progress-fill').style.width = percentage + "%";
        document.getElementById('files').innerText = downloaded + " / " + filesTotal;
    }
}
