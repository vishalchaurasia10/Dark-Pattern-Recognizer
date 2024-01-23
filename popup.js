document.getElementById('getDom').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getDom' }, function (response) {
            console.log(response.dom);
        });
    });
});

document.getElementById('getTable').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getTable' }, function (response) {
            console.log(response.imagesData);
        });
    });
});