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
