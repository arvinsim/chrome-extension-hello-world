let currentTab = undefined;

chrome.devtools.panels.create(
    "Chrome Extension Hello World", // title
    '', // icon
    "devtools.html",
    async (panel) => {
        if (!currentTab) {
            let [tab] = await chrome.tabs.query({ active: true });
            currentTab = tab;
        }
    }
);
