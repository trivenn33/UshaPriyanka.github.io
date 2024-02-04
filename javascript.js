function toggleEmoji(button) {
    // Check if the button already has the 'clicked' class
    if (!button.classList.contains('clicked')) {
        // Remove 'clicked' class from all buttons
        document.querySelectorAll('.emoji-button.clicked').forEach(clickedButton => {
            clickedButton.classList.remove('clicked');
            clickedButton.style.backgroundColor = ''; // Reset background color
        });
        
        // Add 'clicked' class to the clicked button and change background color
        button.classList.add('clicked');
        button.style.backgroundColor = '#f0f0f0'; // Change to your preferred color
    } else {
        // If button is already clicked, reset
        button.classList.remove('clicked');
        button.style.backgroundColor = ''; // Reset background color
    }
}
