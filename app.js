// Init github
const github = new GitHub();

// Search Input
const searchUser = document.getElementById('searchUser');

// Event Listener
searchUser.addEventListener('keyup' , (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTP call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert
            }
            else {
                // Show Profile
            }
        })
    } 
    else {
        // Clear Profile
    }
})