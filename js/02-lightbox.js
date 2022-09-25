import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const galleryImages = galleryItems
  .map((item) => `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" title="${item.description}" alt="${item.description}"></a>`)
	.join("");
  
gallery.insertAdjacentHTML('afterbegin', galleryImages);


// const items = []

// galleryItems.forEach(element => {
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
// 	galleryImage.className = 'gallery__image'
// 	galleryImage.src = element.preview
// 	galleryImage.setAttribute('title', element.description)
// 	galleryImage.alt = element.description

// 	galleryLink.append(galleryImage)
// 	items.push(galleryLink)
// })
// gallery.append(...items)

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})