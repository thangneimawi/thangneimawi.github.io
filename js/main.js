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
