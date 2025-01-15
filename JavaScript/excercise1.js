async function fetchUserProfile() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const userData = {
        name: "John Doe",
        age: 30,
        email: "john@example.com"
    };
    
    return userData;
}

async function displayUserProfile() {
    try {
        const userProfile = await fetchUserProfile();

        const userProfileElement = document.getElementById('userProfile');
        userProfileElement.innerHTML = `
            <h2>User Profile</h2>
            <p><strong>Name:</strong> ${userProfile.name}</p>
            <p><strong>Age::</strong> ${userProfile.age}</p>
            <p><strong>Email:</strong> ${userProfile.email}</p>
        `;
    } catch (error) {
        console.error("Error Fetching user profile", error);
        const userProfileElement = document.getElementById("userProfile");
        userProfileElement.innerHTML = "<h2>Error loading user profile</h2>";
    }
    
}

document.addEventListener('DOMContentLoaded', displayUserProfile);