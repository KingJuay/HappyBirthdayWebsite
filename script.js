window.onload = function () {
    const cake = document.getElementById('cake');
    const birthdaySong = document.getElementById('birthday-song');
    const wishInput = document.getElementById('wish-input');
    const submitWish = document.getElementById('submit-wish');
    const birthdaySection = document.getElementById('birthday-section');
    const partySection = document.getElementById('party-section');
    const wishDisplay = document.getElementById('wish-display');
    const balloonsContainer = document.getElementById('balloons');
    const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

    const candle = document.querySelector('.candle');
    const flame = document.querySelector('.flame');

    // เริ่มเล่นเพลงเมื่อคลิกครั้งแรก
    document.body.addEventListener('click', () => {
        birthdaySong.play();
    }, { once: true });

    // ทำให้เค้กค่อยๆ ขยาย
    setTimeout(() => {
        cake.style.width = '300px';
        cake.style.opacity = '1';

        // ทำให้เทียนค่อยๆ ขยาย
        candle.style.transform = 'scale(1)';

        // ทำให้เปลวไฟค่อยๆ ขยาย
        flame.style.transform = 'translateX(-50%) scale(1)';
    }, 500);




    // สร้างลูกโป่ง
    function createBalloons() {
        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.animationDelay = Math.random() * 5 + 's';
    
            // สร้างเชือก
            const string = document.createElement('div');
            string.classList.add('string');
            balloon.appendChild(string); // เพิ่มเชือกไปที่ลูกโป่ง
    
            balloonsContainer.appendChild(balloon);
        }
    }
    

    // เมื่อกดส่งคำอธิษฐาน
    submitWish.addEventListener('click', () => {
        const wishText = wishInput.value.trim();

        if (wishText) {
            // ซ่อนหน้าอธิษฐาน
            birthdaySection.style.display = 'none';

            // แสดงหน้าปาร์ตี้
            partySection.style.display = 'flex';

            // แสดงข้อความคำอธิษฐาน
            wishDisplay.textContent = `Your wish: "${wishText}"`;

            // สร้างลูกโป่ง
            createBalloons();

            // เพิ่มอนิเมชันให้รูปภาพ
        const hiddenImages = document.querySelectorAll('.hidden-image');
        hiddenImages.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('show-image');
            }, index * 500); // รูปภาพแต่ละรูปแสดงทีละ 0.5 วินาที
        });
        } else {
            alert('กรุณาใส่คำอธิษฐานก่อนกดส่ง!');
        }
    });
};
