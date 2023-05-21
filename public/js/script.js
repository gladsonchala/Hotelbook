// Add your JavaScript logic here

// Example code: Fetch hotels data from the API
fetch('/hotels')
  .then(response => response.json())
  .then(data => {
    // Process the hotels data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching hotels:', error);
  });

// Example code: Handle form submission
const form = document.querySelector('#hotelForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Convert the form data to JSON
  const formDataJson = Object.fromEntries(formData.entries());

  // Example code: Send the form data to the API
  fetch('/hotels', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataJson)
  })
    .then(response => response.json())
    .then(data => {
      // Process the API response
      console.log(data);
    })
    .catch(error => {
      console.error('Error creating hotel:', error);
    });
});

// Example code: Logout
const logoutButton = document.querySelector('#logoutButton');

logoutButton.addEventListener('click', () => {
  // Example code: Send a request to logout
  fetch('/auth/logout', {
    method: 'POST'
  })
    .then(response => {
      if (response.ok) {
        // Redirect to the login page or perform any other actions
        window.location.href = '/login';
      } else {
        throw new Error('Logout failed');
      }
    })
    .catch(error => {
      console.error('Error logging out:', error);
    });
});

// Add more JavaScript logic as needed
