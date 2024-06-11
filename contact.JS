// Add event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    validateForm(); // Call the validateForm function
});
// Function to validate the form
const validateForm = () => {
    const fields = ['name', 'number', 'email'];
    let isValid = true; 
// Loop through each field to validate
    fields.forEach(field => {
        const value = document.getElementById(field).value.trim();
        const errorElement = document.getElementById(`${field}Error`);
        errorElement.textContent = '';
// Validate each field based on its ID
        if (field === 'name') {
            if (value.length < 2 || !/^[A-Za-z]+$/.test(value)) {
                errorElement.textContent = `Name must contain at least 2 alpha characters.`;
                isValid = false; 
            }
        } else if (field === 'number') {
            if (value.length !== 10 || !/^\d+$/.test(value)) {
                errorElement.textContent = 'Please enter a 10-digit number with area code';
                isValid = false; 
            }
        } else if (field === 'email') {
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                errorElement.textContent = 'Please enter a valid email.';
                isValid = false;
            }
        } 
    });
// If form is valid, call displaySummary function
    if (isValid) {
        displaySummary();
    }
};
// Function to display form submission summary
const displaySummary = () => {
    const Name = document.getElementById('name').value.trim();
    const summary = document.getElementById('summary');
    summary.innerHTML  = `Thank you, ${Name}, for your query! Please allow 2-3 business days to get back to you.`;
    summary.style.display = 'block';
    t1.style.display='none';
    t2.style.display='none';
    link1.style.display='block';
    link2.style.display='block';
    document.getElementById('contactform').style.display='none';
};