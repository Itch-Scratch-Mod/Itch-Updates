chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: `chrome-extension://${chrome.runtime.id}/pages/index.html`
    })
});

chrome.action.setBadgeText({
    text: chrome.runtime.getManifest().version,
})
chrome.action.setBadgeBackgroundColor({
    color: "#786452",
})
chrome.action.setBadgeTextColor({
    color: "#fff"
})