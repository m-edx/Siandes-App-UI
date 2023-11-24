// Banner Slider
$('.owl-carousel').owlCarousel({
        stagePadding: 20,
        loop: true,
        margin: 10,
        lazyLoad: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // Show Password
var ShowPasswordToggle = document.querySelector("[type='password']");
ShowPasswordToggle.onclick = function() {
    document.querySelector("[type='password']").classList.add("input-password");
    document.getElementById("toggle-password").classList.remove("d-none");

    const passwordInput = document.querySelector("[type='password']");
    const togglePasswordButton = document.getElementById("toggle-password");

    togglePasswordButton.addEventListener("click", togglePassword);

    function togglePassword() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordButton.setAttribute("aria-label", "Hide password.");
        } else {
            passwordInput.type = "password";
            togglePasswordButton.setAttribute(
                "aria-label",
                "Show password as plain text. " +
                "Warning: this will display your password on the screen."
            );
        }
    }
};