// Init github
const github = new GitHub();

// Init UI
const ui = new UI();

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
                ui.showAlert('User Not Found', 'alert alert-danger');
            }
            else {
                // Show Profile
                ui.showProfile(data.profile);
                // Show User Repos
                ui.showRepos(data.repos);
            }
        })
    } 
    else {
        // Clear Profile
        ui.clearProfile();
    }
})