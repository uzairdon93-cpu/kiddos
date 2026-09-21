function counter(id, target) {
    let count = 0
    let speed = target / 200

    let update = setInterval(function () {
        count += speed

        if (count >= target) {
            count = target
            clearInterval(update)
        }
        document.getElementById(id).innerText = Math.floor(count)
    }, 10)
}
counter("CertifiedTeachers", 18)
counter("SuccessfulKids", 351)
counter("HappyParents", 564)
counter("AwardsWon", 300)


document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        spacebetween: 30,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.8
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("ContactForm");
    const msg = document.getElementById("successMsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // reload rokta hai

        msg.style.display = "block"; // message show

        form.reset(); // form clear
    });

});
function contactform() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
    }
    else {
        alert("Thankfull You are successfull");
    }

}
function subscribe() {
    let email1 = document.getElementById("email1").value;
    if (email1 === "") {
        alert("Please fill this email");
    }
    else {
        alert("Thanksfull for subscribe!");
    }
}
