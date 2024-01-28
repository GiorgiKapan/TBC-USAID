const modal = document.getElementById("responsive-modal-wrapper");
const modalContent = document.querySelector('.modal-content')
const btn = document.getElementById("burger");
const clonedBtn = btn.cloneNode(true);
const nav = document.getElementById('navigation');
const clonedNav = nav.cloneNode(true);

btn.onclick = function openModal() {
    modal.style.display = "block";
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    appendElementsInModal();
}

function appendElementsInModal() {
    positionCloseButton();
    positionNav();
    modalContent.append(clonedBtn, clonedNav);
}

function positionCloseButton() {
    clonedBtn.style.position = 'absolute';
    clonedBtn.style.right = '14%';
    clonedBtn.style.top = '4.4%'
    clonedBtn.classList.add('burger-wrapper-button-responsive');
}

function positionNav() {
    clonedNav.classList.add('nav-responsive');
}

clonedBtn.onclick = function () {
    closeModal();
};

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
}