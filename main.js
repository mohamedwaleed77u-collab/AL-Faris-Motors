var themeButton = document.getElementById("themeButton");
var savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeButton) {
        themeButton.textContent = "Light Theme";
    }
}

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "Light Theme";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "Dark Theme";
        }
    });
}
var searchInput = document.getElementById("searchInput");
var carsContainer = document.getElementById("carsContainer");
var gridButton = document.getElementById("gridButton");
var listButton = document.getElementById("listButton");

if (searchInput && carsContainer) {
    searchInput.addEventListener("keyup", function () {
        var searchText = searchInput.value.toLowerCase();
        var carCards = document.querySelectorAll(".car-card");

        carCards.forEach(function (card) {
            var carName = card.getAttribute("data-name").toLowerCase();

            if (carName.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

if (gridButton && listButton && carsContainer) {
    gridButton.addEventListener("click", function () {
        carsContainer.classList.add("car-grid");
        carsContainer.classList.remove("car-list");
    });

    listButton.addEventListener("click", function () {
        carsContainer.classList.add("car-list");
        carsContainer.classList.remove("car-grid");
    });
}
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}
function clearError(errorId) {
    document.getElementById(errorId).textContent = "";
}
function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
}
var registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("registerName").value;
        var email = document.getElementById("registerEmail").value;
        var password = document.getElementById("registerPassword").value;
        var isValid = true;

        clearError("registerNameError");
        clearError("registerEmailError");
        clearError("registerPasswordError");
        document.getElementById("registerSuccess").textContent = "";

        if (name === "") {
            showError("registerNameError", "Name is required.");
            isValid = false;
        }

        if (email === "") {
            showError("registerEmailError", "Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError("registerEmailError", "Please enter a valid email.");
            isValid = false;
        }

        if (password === "") {
            showError("registerPasswordError", "Password is required.");
            isValid = false;
        } else if (password.length < 6) {
            showError("registerPasswordError", "Password must be at least 6 characters.");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("registerSuccess").textContent = "Registration successful.";
            registerForm.reset();
        }
    });
}
var loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;
        var isValid = true;

        clearError("loginEmailError");
        clearError("loginPasswordError");
        document.getElementById("loginSuccess").textContent = "";

        if (email === "") {
            showError("loginEmailError", "Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError("loginEmailError", "Please enter a valid email.");
            isValid = false;
        }

        if (password === "") {
            showError("loginPasswordError", "Password is required.");
            isValid = false;
        } else if (password.length < 6) {
            showError("loginPasswordError", "Password must be at least 6 characters.");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("loginSuccess").textContent = "Login successful.";
            loginForm.reset();
        }
    });
}
var bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("bookingName").value;
        var email = document.getElementById("bookingEmail").value;
        var car = document.getElementById("bookingCar").value;
        var date = document.getElementById("bookingDate").value;
        var isValid = true;

        clearError("bookingNameError");
        clearError("bookingEmailError");
        clearError("bookingCarError");
        clearError("bookingDateError");
        document.getElementById("bookingSuccess").textContent = "";

        if (name === "") {
            showError("bookingNameError", "Name is required.");
            isValid = false;
        }

        if (email === "") {
            showError("bookingEmailError", "Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError("bookingEmailError", "Please enter a valid email.");
            isValid = false;
        }

        if (car === "") {
            showError("bookingCarError", "Please choose a car.");
            isValid = false;
        }

        if (date === "") {
            showError("bookingDateError", "Please choose a date.");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("bookingSuccess").textContent = "Booking request sent.";
            bookingForm.reset();
        }
    });
}
var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("contactName").value;
        var email = document.getElementById("contactEmail").value;
        var message = document.getElementById("contactMessage").value;
        var isValid = true;

        clearError("contactNameError");
        clearError("contactEmailError");
        clearError("contactMessageError");
        document.getElementById("contactSuccess").textContent = "";

        if (name === "") {
            showError("contactNameError", "Name is required.");
            isValid = false;
        }

        if (email === "") {
            showError("contactEmailError", "Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError("contactEmailError", "Please enter a valid email.");
            isValid = false;
        }

        if (message === "") {
            showError("contactMessageError", "Message is required.");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("contactSuccess").textContent = "Message sent successfully.";
            contactForm.reset();
        }
    });
}
