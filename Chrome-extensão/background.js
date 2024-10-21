chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        chrome.cookies.getAll({ url: tab.url }, (cookies) => {
            chrome.storage.local.set({ [tab.url]: cookies });
        });
    }
  });