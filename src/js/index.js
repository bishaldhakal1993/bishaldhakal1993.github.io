import dataObj from '../mocks/data.json' assert {type: 'json'};

let contents = '';

// Append each of the articles to the content.
dataObj.articles.forEach((item) => {
    contents = contents +
        `<div class="row"><div class="col-left"><div class="category margin-bottom-extra-small"><span>${item.category}</span></div>
        <div class="title margin-bottom-extra-small"><a class="title-link" href="${item.link}">${item.headline}</a></div>
        <div class="description"><span>${item.description}</span></div></div>
        <div class="col-right">
        <div class="thumbnail-container"><img class="thumbnail" alt="${item.thumbnail.title}" src="${item.thumbnail.src}"></div></div>
        </div>`;
})

// Add the contents to the articleContainer.
document.getElementById('articleContainer').innerHTML = contents
