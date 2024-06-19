document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: 'img/1.jpg', name: 'Custom Name 1', link: 'https://example.com/1' },
        { src: 'img/2.jpg', name: 'Custom Name 2', link: 'https://example.com/2' },
        { src: 'img/3.jpg', name: 'Custom Name 3', link: 'https://example.com/3' },
        { src: 'img/4.jpg', name: 'Custom Name 4', link: 'https://example.com/4' },
        { src: 'img/5.jpg', name: 'Custom Name 5', link: 'https://example.com/5' },
        { src: 'img/6.jpg', name: 'Custom Name 6', link: 'https://example.com/6' },
        { src: 'img/7.jpg', name: 'Custom Name 7', link: 'https://example.com/7' },
        { src: 'img/8.jpg', name: 'Custom Name 8', link: 'https://example.com/8' },
        { src: 'img/9.jpg', name: 'Custom Name 9', link: 'https://example.com/9' },
        { src: 'img/10.jpg', name: 'Custom Name 10', link: 'https://example.com/10' },
        { src: 'img/11.jpg', name: 'Custom Name 11', link: 'https://example.com/11' },
        { src: 'img/12.jpg', name: 'Custom Name 12', link: 'https://example.com/12' },
        { src: 'img/13.jpg', name: 'Custom Name 13', link: 'https://example.com/13' },
        { src: 'img/14.jpg', name: 'Custom Name 14', link: 'https://example.com/14' },
        { src: 'img/15.jpg', name: 'Custom Name 15', link: 'https://example.com/15' },
        { src: 'img/16.jpg', name: 'Custom Name 16', link: 'https://example.com/16' },
        { src: 'img/17.jpg', name: 'Custom Name 17', link: 'https://example.com/17' },
        { src: 'img/18.jpg', name: 'Custom Name 18', link: 'https://example.com/18' },
        { src: 'img/19.jpg', name: 'Custom Name 19', link: 'https://example.com/19' },
        { src: 'img/20.jpg', name: 'Custom Name 20', link: 'https://example.com/20' },
        { src: 'img/21.jpg', name: 'Custom Name 21', link: 'https://example.com/21' },
    ];

    const imagesContainer = document.getElementById("images-container");
    const loadMoreButton = document.getElementById("load-more");
    let currentImageIndex = 0;

    function loadImages(count) {
        for (let i = 0; i < count; i++) {
            if (currentImageIndex >= images.length) {
                loadMoreButton.style.display = 'none';
                break;
            }
            const imageItem = document.createElement("div");
            imageItem.className = "image-item";
            
            const imageUrl = images[currentImageIndex].src;
            const imageName = images[currentImageIndex].name;
            const imageLink = images[currentImageIndex].link;

            imageItem.innerHTML = `
                <img src="${imageUrl}" alt="${imageName}">
                <p>${imageName}</p>
                <a href="${imageLink}" class="custom-link-button">Go to Link</a>
            `;
            
            imagesContainer.appendChild(imageItem);
            currentImageIndex++;

            // Trigger the transition by adding the 'visible' class after appending the element
            setTimeout(() => {
                imageItem.classList.add('visible');
            }, 100); // Delay to ensure the item is added to the DOM
        }
    }

    loadMoreButton.addEventListener("click", function() {
        loadImages(6);
    });

    loadImages(6);
});
