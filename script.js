function openModal(e) {
    const modalImage = document.getElementById('modal-image')
    const modalWrapper = document.getElementById('modalWrapper')
    const modalContent = document.getElementById('modalContent')
    modalWrapper.style.display = 'flex'


    const link = document.createElement('a')
    link.href = '/sofa.html'
    const img = document.createElement('img')
    img.src = e.src
    img.classList.add('modalImage')

    const text = document.createElement('p')
    text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    text.classList.add('p')
    link.appendChild(img)
    link.appendChild(text)
    modalContent.appendChild(link)
}