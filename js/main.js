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

            // GAS Web App URL (User need to update this after deployment)
            // GAS Web App URL
            const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwK4RD1NvgGrEZUtBBrRek53K1rfX5sixaEp0qKllhKxFnIgoVMVp4uqJngtypDlCVQ3Q/exec";

            // Create FormData
            const formData = new FormData(contactForm);

            // Check if URL is set
            if (GAS_WEB_APP_URL.includes("YOUR_GAS_WEB_APP_URL_HERE")) {
                alert("시스템 설정이 완료되지 않았습니다. 관리자에게 문의해주세요.\n(Google Apps Script URL 미설정)");
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                return;
            }

            // Send via Fetch
            fetch(GAS_WEB_APP_URL, {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result === "success") {
                        alert("무료 진단 신청이 성공적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.");
                        contactForm.reset();
                    } else {
                        throw new Error(JSON.stringify(data));
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("전송에 실패했습니다. 다음 사항을 확인해주세요:\n1. GAS 배포 URL이 정확한지\n2. '누구나(Anyone)' 권한으로 배포되었는지");
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
