class UI {

    constructor() {
        this.profile = document.getElementById('profile');
    }

    //show profile
    showProfile(user) {

        

        this.profile.innerHTML = ` 
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">followers: ${user.followers}</span>
                        <span class="badge badge-info">following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                        <li class="list-group-item">Bio: ${user.bio}</li>
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //Show Repos
    showRepos(repos) {
        let output = '';

        console.log(repos)

        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <h4>${repo.name}</h4>
                            <a class="btn btn-primary " href="${repo.html_url}" target="_blank">View ${repo.name} on GitHub</a>
                            <br><br>
                            <p><span class="badge badge-success">Updated ${repo.updated_at}</span></p>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">forks: ${repo.forks_count}</span>
                            <span class="badge badge-warning">Open Issues: ${repo.open_issues_count}</span>
                            <br><br>
                            <p>Updated ${repo.updated_at}</p>
                            <p>${repo.description}</p>
                        </div>
                    </div>
                </div>
            `;

        });

        //Output repos
        document.getElementById('repos').innerHTML = output;


    }

    //Show alert message
    showAlert(msg, className) {

        //clear any alerts
        this.clearAlert();

        //create div
        const div = document.createElement('div');

        //add clasess
        div.className = className;

        //add text
        div.appendChild(document.createTextNode(msg));

        //get parent
        const container = document.querySelector('.searchContainer');

        //get serach box
        const search = document.querySelector('.search');

        //insert alert
        container.insertBefore(div, search);

        //timeout after 2 seconds
        setTimeout(() => { this.clearAlert() }, 2000);

    }

    //clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    //clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}