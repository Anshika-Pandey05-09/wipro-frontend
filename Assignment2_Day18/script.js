async function fetchRandomUser() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const user = data.results[0];

        // Update the DOM with user data
        document.getElementById('userImage').src = user.picture.large;
        document.getElementById('userName').textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userInfo').style.display = 'block';

      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to fetch user. Please try again.");
      }
    }