// Step1: Define async getUser() function
async function getUser() {
    const userDiv = document.getElementById('userinfo');
    userDiv.innerHTML = 'Loading User data from API'; // Show loading message
    try {
        // Step2: Fetch data asynchronously from any sample API / fake API
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        // Step3: Checking the response status
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Step4: Parse the response data to JSON
        const userData = await response.json();
        // Step5: Update UI with the fetched data
        userDiv.innerHTML = `
            <h2>User Information</h2>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
        `;
        //Step6: Handle errors 
    } catch (error) {
        userDiv.innerHTML = `<p style="color: red;">Error fetching user data: ${error.message}</p>`;
    }
}