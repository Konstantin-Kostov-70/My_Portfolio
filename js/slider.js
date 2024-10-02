document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("close")[0];
    const prevBtn = document.getElementsByClassName("prev")[0];
    const nextBtn = document.getElementsByClassName("next")[0];
    let currentIndex = 0;

    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');

    const diplomImages = [
       "/images/certificates-images/diploma-python.jpeg"
    ];

    const certificateImages = [
        "/images/certificates-images/cert-1.jpeg",
        "/images/certificates-images/cert-2.jpeg",
        "/images/certificates-images/cert-3.jpeg",
        "/images/certificates-images/cert-4.jpeg",
        "/images/certificates-images/cert-5.jpeg",
        "/images/certificates-images/cert-6.jpeg",
        "/images/certificates-images/cert-7.jpeg",
        "/images/certificates-images/cert-8.jpeg",
        "/images/certificates-images/cert-9.jpeg",
        "/images/certificates-images/cert-10.jpeg",
        "/images/certificates-images/cert-11.jpeg",
        "/images/certificates-images/cert-12.jpeg",
        "/images/certificates-images/cert-13.jpeg",
        "/images/certificates-images/cert-14.jpeg",
        "/images/certificates-images/cert-15.jpeg",
    ];

    let imageSources = [];
    if (type === 'diplom') {
        imageSources = diplomImages;
        prevBtn.classList.add("hidden")
        nextBtn.classList.add("hidden")
        
    } else if (type === 'certificates') {
        imageSources = certificateImages;
    }

    function showImage(index) {
        currentIndex = index;
        modalImg.src = imageSources[currentIndex];
        modal.style.display = "flex";
    }

    showImage(0); 

    prevBtn.onclick = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageSources.length - 1;
        showImage(currentIndex);
    }

    nextBtn.onclick = () => {
        currentIndex = (currentIndex < imageSources.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    }

    closeBtn.onclick = () => {
        window.location.href = "about-me.html";
    }
});
