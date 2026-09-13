document.addEventListener("DOMContentLoaded", function () {

    const pages = [
        "index.html",
        "about.html",
        "education.html",
        "skills.html",
        "projects.html",
        "certificates.html",
        "contact.html"
    ];

    let currentPage =
        window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    let currentIndex =
        pages.indexOf(currentPage);

    if (currentIndex === -1) {
        currentIndex = 0;
    }

    setTimeout(function () {

        const nextIndex =
            (currentIndex + 1) % pages.length;

        window.location.href =
            pages[nextIndex];

    }, 7000);

});