chrome.devtools.panels.create(
    "Chrome Extension Hello World", // title
    'images/icon.png', // icon path
    "devtools.html", // page path
    async (panel) => {
        console.log(panel)
    }
);

