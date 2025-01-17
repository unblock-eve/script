// Create a button element
const button = document.createElement('button');
button.textContent = 'Paste and Press Enter'; // Set button text
button.style.position = 'fixed'; // Fix position on screen
button.style.top = '10px'; // Distance from the top of the page
button.style.left = '10px'; // Distance from the left of the page
button.style.zIndex = '1000'; // Ensure it appears above other elements
button.style.padding = '10px'; // Add padding for aesthetics
button.style.fontSize = '14px'; // Set font size for better readability

// Append the button to the document body
document.body.appendChild(button);

// Add a click event listener to the button
button.addEventListener('click', async () => {
    try {
        // Access the clipboard content
        const clipboardText = await navigator.clipboard.readText();

        // Find the target contenteditable div
        const targetDiv = document.querySelector('div[contenteditable="true"]');

        // Check if the target div exists
        if (targetDiv) {
            targetDiv.textContent = clipboardText; // Paste the clipboard content
            console.log('Pasted content into the box:', clipboardText);

            // Simulate pressing the Enter key twice with a 0.2-second delay
            const simulateEnterKey = () => {
                const enterEvent = new KeyboardEvent('keydown', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true,
                });
                targetDiv.dispatchEvent(enterEvent);
                console.log('Enter key pressed.');
            };

            simulateEnterKey(); // First Enter key press

            // Wait 0.2 seconds before the second Enter key press
            setTimeout(() => {
                simulateEnterKey(); // Second Enter key press
            }, 200);
        } else {
            console.error('Target contenteditable div not found.');
        }
    } catch (err) {
        console.error('Failed to access clipboard:', err);
    }
});
