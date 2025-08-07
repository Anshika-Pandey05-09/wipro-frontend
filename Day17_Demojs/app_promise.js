//use fetch with .then() and .catch() methods
// Step1: Define async getUser() function
function getUser() {
    const userDiv = document.getElementById('userinfo');
    userDiv.innerHTML = 'Loading User data from API'; // Show loading message
    // Step2: Fetch data asynchronously from any sample API / fake API
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            // Step3: Checking the response status
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Step4: Parse the response data to JSON
            return response.json();
        })
        .then(userData => {
            // Step5: Update UI with the fetched data
            userDiv.innerHTML = `
                <h2>User Information</h2>
                <p><strong>Name:</strong> ${userData.name}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Phone:</strong> ${userData.phone}</p>
            `;
        })
        // Step6: Handle errors 
        .catch(error => {
            userDiv.innerHTML = `<p style="color: red;">Error fetching user data: ${error.message}</p>`;
        });
}