        function revealWebsite() {
            const container = document.querySelector('.envelope-container');
            const intro = document.getElementById('intro-screen');
            const website = document.getElementById('main-website');

            container.classList.add('opened');

            setTimeout(() => {
                website.classList.add('show-site');
                intro.style.transform = 'translateY(-100%)';

                setTimeout(() => {
                    intro.style.display = 'none';
                    handleScroll();
                }, 1200);
            }, 1800);
        }

        function handleScroll() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);
// Set the specific wedding date
const weddingDate = new Date("May 2, 2026 00:00:00").getTime();
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the results, padding with zero for that clean 00:00 format
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // If the count down is finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-section").innerHTML = "<h3>It's our wedding day! 🎉</h3>";
    }
}, 1000);