// Keeping the window in the forefront when selecting songs
window.addEventListener('focus', () => {
    document.title = 'Selecting Songs...';
});

window.addEventListener('blur', () => {
    // Code to prevent focus loss can be implemented here
    // For example: Bring the window back to the forefront
    window.focus();
});