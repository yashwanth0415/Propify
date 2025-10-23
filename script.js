     // Background Image Slider
        const backgroundImages = document.querySelectorAll('.background-slider img');
        let backgroundIndex = 0;

        function changeBackgroundImage() {
            backgroundImages[backgroundIndex].classList.remove('active');
            backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
            backgroundImages[backgroundIndex].classList.add('active');
        }

        setInterval(changeBackgroundImage, 2000); // Change image every 2 secondsn