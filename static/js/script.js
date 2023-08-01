window.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("shareModal");

    // Get the button that opens the modal
    var btn = document.getElementById("shareButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let switcher = document.querySelector('#themeSwitch');

    switcher.addEventListener('change', function(event) {
        if (event.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Retrieve from local storage
    var savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        switcher.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        switcher.checked = false;
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('Link copied!');
    })
    .catch((error) => {
        console.error('Could not copy text: ', error);
    });
}

let sunIcon = document.querySelector('#sunIcon');
let moonIcon = document.querySelector('#moonIcon');

switcher.addEventListener('change', function(event){
    if (event.target.checked) {
        document.body.classList.add('dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        document.body.classList.remove('dark-theme');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
});

window.addEventListener('load', function() {
    let logo = document.querySelector('#logo');
    let lightLogoUrl = logo.dataset.light;
    let darkLogoUrl = logo.dataset.dark;

    let sunIcon = document.getElementById('sunIcon');
    let moonIcon = document.getElementById('moonIcon');

    let switcher = document.querySelector('.theme-switch input[type="checkbox"]');

    switcher.addEventListener('change', function(event){
        if (event.target.checked) {
            document.body.classList.add('dark-theme');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
            logo.src = darkLogoUrl;
        } else {
            document.body.classList.remove('dark-theme');
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
            logo.src = lightLogoUrl;
        }
    });

    // Initialize theme based on saved setting
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    switcher.checked = savedTheme === 'dark';

    if(switcher.checked){
        logo.src = darkLogoUrl;
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        logo.src = lightLogoUrl;
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }

});
