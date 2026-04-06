function showSoftwareDetail(detailNumber) {
    const boxes = document.getElementById('sw-boxes');
    const panel = document.getElementById('sw-detail-panel');
    const stack = document.querySelector('.sw-image-stack');
    const clickedBox = boxes.querySelector(`.inner-box:nth-child(${detailNumber})`);
    const isAlreadyActive = clickedBox.classList.contains('is-active');
    boxes.querySelectorAll('.inner-box').forEach(box => box.classList.remove('is-active'));

    if (isAlreadyActive) {
        panel.classList.remove('is-active');
        stack.classList.remove('show-img-1', 'show-img-2');
        stack.classList.add('show-sw-default');
    }
    else {

        panel.querySelectorAll('.detail-content').forEach(content => content.classList.remove('is-active'));

        clickedBox.classList.add('is-active');
        panel.classList.add('is-active');
        document.getElementById('sw-detail-' + detailNumber).classList.add('is-active');

        stack.classList.remove('show-sw-default', 'show-img-1', 'show-img-2');
        stack.classList.add('show-img-' + detailNumber);



    }
}



function showHardwareDetail(detailNumber) {
    const boxes = document.getElementById('hw-boxes');
    const panel = document.getElementById('hw-detail-panel');
    const stack = document.querySelector('.hw-image-stack');
    const clickedBox = boxes.querySelector(`.inner-box:nth-child(${detailNumber})`);
    const isAlreadyActive = clickedBox.classList.contains('is-active');
    boxes.querySelectorAll('.inner-box').forEach(box => box.classList.remove('is-active'));

    if (isAlreadyActive) {
        panel.classList.remove('is-active');
        stack.classList.remove('show-hw-1', 'show-hw-2');
        stack.classList.add('show-hw-default');
    }
    else {
        panel.querySelectorAll('.detail-content').forEach(content => content.classList.remove('is-active'));
        clickedBox.classList.add('is-active');
        panel.classList.add('is-active');
        document.getElementById('hw-detail-' + detailNumber).classList.add('is-active');
        stack.classList.remove('show-hw-default', 'show-hw-1', 'show-hw-2');
        stack.classList.add('show-hw-' + detailNumber);
    }
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

