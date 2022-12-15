chrome.action.setBadgeText({
    text: chrome.runtime.getManifest().version,
})
chrome.action.setBadgeBackgroundColor({
    color: "#FA6",
})