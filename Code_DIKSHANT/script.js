document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollButton').addEventListener('click', function() {
        document.querySelector('.how-to').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section1, .how-to, .preferences');
    let isScrolling = false;

    document.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        isScrolling = true;
        
        setTimeout(() => {
            isScrolling = false;
        }, 1000);

        const delta = Math.sign(event.deltaY);
        const currentSectionIndex = Array.from(sections).findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });

        if (delta > 0 && currentSectionIndex < sections.length - 1) {
            sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (delta < 0 && currentSectionIndex > 0) {
            sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });

    const scrollButton = document.getElementById('scrollButton');
    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            sections[1].scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const topButton = document.getElementById('topb');

    topButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});