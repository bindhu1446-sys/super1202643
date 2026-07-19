document.addEventListener("DOMContentLoaded", function () {

    const photos = [
        "photo1.jpeg",
        "photo2.jpeg",
        "photo3.jpeg"
    ];

    let current = 0;

    const img = document.createElement("img");
    img.id = "slideshow";
    img.src = photos[current];

    img.style.width = "350px";
    img.style.height = "450px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "20px";
    img.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";

    document.body.appendChild(img);

    setInterval(() => {
        current = (current + 1) % photos.length;
        img.src = photos[current];
    }, 3000);

});