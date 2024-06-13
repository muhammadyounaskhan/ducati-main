function updateViewportWidth() {
    const viewportWidth = window.innerWidth;
    const viewportWidthDiv = document.getElementById('viewportWidth');
    viewportWidthDiv.textContent = `Viewport Width: ${viewportWidth}px`;
}

// Initial update
updateViewportWidth();

// Update on resize
window.addEventListener('resize', updateViewportWidth);
