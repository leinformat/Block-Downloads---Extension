chrome.downloads.onCreated.addListener(function (downloadItem) {
  chrome.downloads.cancel(downloadItem.id, function () {
    console.log(`Descarga cancelada: ${downloadItem.filename}`);
  });
});