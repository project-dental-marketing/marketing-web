// Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for header height
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handler (EmailJS)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim() && input.hasAttribute('required')) {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = '#E5E7EB'; // Reset border color
                }
            });

            if (!isValid) {
                alert('모든 필수 항목을 입력해주세요.');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = '전송 중...';
            submitBtn.disabled = true;

            // EmailJS Configuration
            const serviceID = 'dentric';
            const templateID = 'template_gr53wfg';

            // Send Email
            emailjs.sendForm(serviceID, templateID, contactForm)
                .then(() => {
                    alert('무료 진단 신청이 성공적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.');
                    contactForm.reset();
                }, (err) => {
                    alert('전송에 실패했습니다. 다시 시도해주세요.\n에러: ' + JSON.stringify(err));
                })
                .finally(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in-up class to sections for animation potential
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-up');
        observer.observe(section);
    });
});
