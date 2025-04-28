// Script for dynamic timeline and image slider

document.addEventListener('DOMContentLoaded', () => {
    // Timeline data
    const timelineData = [
        { year: '2000', event: 'Organisasi didirikan' },
        { year: '2005', event: 'Mencapai 100 anggota' },
        { year: '2010', event: 'Memulai program sosial' },
        { year: '2015', event: 'Membangun kantor pusat' },
        { year: '2020', event: 'Ekspansi ke wilayah baru' }
    ];

    const timelineContainer = document.querySelector('.timeline');

    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        timelineItem.innerHTML = `
            <h3>${item.year}</h3>
            <p>${item.event}</p>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // Image slider
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slideImages.length - 1;
        } else if (index >= slideImages.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
