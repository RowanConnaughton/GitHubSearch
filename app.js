//Init GitHub
const github = new Github;

//Init Ui
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get User input
    const userText = e.target.value;

    if (userText !== '') {

        //Make Http Call
        github.getUser(userText)
            .then(data => {

                if (data.profile.message === 'Not Found') {
                    //show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');

                } else {
                    //show profile
                    ui.showProfile(data.profile);

                    //show repos
                    ui.showRepos(data.repos);

                }

            });

    } else {

        //clear Profile
        ui.clearProfile();

    }

});
