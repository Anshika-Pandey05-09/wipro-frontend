async function fetchEmployees() {
  const url = "https://dummy.restapiexample.com/api/v1/employees";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Employee Data:", data);
  } catch (error) {
    console.error("Error fetching employee data:", error);
  }
}

// Call the function
fetchEmployees();