import coursesData from './modules/courses_data.js';

(function listenToHeaderScrollEvent() {
    document.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const header = document.getElementsByTagName('header')[0];
        if (scrollTop > 1) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    })
})();

(function displayCourseGrid() {
    const courseGridWrapper = document.querySelector('.course-grid-wrapper');

    coursesData.map((content) => {
        const div = document.createElement('div');
        const divElements = {
            image: document.createElement('img'),
            h4: document.createElement('h4'),
            p: document.createElement('p'),
            anchor: document.createElement('a')
        }

        divElements.image.src = content.imageUrl;
        divElements.image.alt = 'Image';
        divElements.h4.innerHTML = content.title;
        divElements.p.innerHTML = 'რეგისტრაცია დასრულებულია';
        divElements.anchor.href = '#';

        const arrowIcon = document.createElement('i');
        arrowIcon.classList.add('fa', 'fa-arrow-right');
        divElements.anchor.append(arrowIcon, ' კურსის დეტალები');

        div.append(divElements.image, divElements.h4, divElements.p, divElements.anchor);
        courseGridWrapper.append(div);
    });
})();