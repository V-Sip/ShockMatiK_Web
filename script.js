function showSoftwareImage(imageNumber) {
    const stack = document.querySelector('.sw-image-stack');
    stack.classList.remove('show-sw-default', 'show-img-1', 'show-img-2');
    
    stack.classList.add('is-active');
    
    stack.classList.add('show-img-' + imageNumber);

    setTimeout(() => {
        stack.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'
        });
    }, 300);
}

function showHardwareImage(groupNumber) {
    const stack = document.querySelector('.hw-image-stack');
    
    stack.classList.remove('show-hw-default', 'show-hw-1', 'show-hw-2');
    
    stack.classList.add('is-active');
    
    stack.classList.add('show-hw-' + groupNumber);

    setTimeout(() => {
        stack.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'
        });
    }, 300);
}

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = imageSrc;
    modal.classList.add('is-open');
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('is-open');
}

