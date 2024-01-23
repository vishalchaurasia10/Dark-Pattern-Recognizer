console.log("dark pattern extension is running...")

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "getDom") {
        sendResponse({ dom: document.body.innerHTML });
    }
    if (request.action == "getTable") {
        const imagesData = [];
        const imageElements = document.querySelectorAll('img');

        imageElements.forEach((imageElement) => {
            const classAttribute = imageElement.className || 'none';
            const idAttribute = imageElement.id || 'none';
            const altText = imageElement.alt || 'none';
            const srcAttribute = imageElement.src || 'none';

            const imageData = {
                class: classAttribute,
                id: idAttribute,
                text: altText,
                imageUrl: srcAttribute
            };

            imagesData.push(imageData);
        });

        sendResponse({ imagesData: imagesData });
    }
});
