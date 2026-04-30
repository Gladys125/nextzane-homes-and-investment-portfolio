const menuIcon = document.getElementById("menu-icon");
        const navbar = document.querySelector(".navbar");

        menuIcon.onclick = () => {
            navbar.classList.toggle("active");
        };

        function toggleText(id, button) {
            var moreText = document.getElementById(id);

            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "block";
                button.innerText = "Read Less";
            } else {
                moreText.style.display = "none";
                button.innerText = "Read More";
            }
        }