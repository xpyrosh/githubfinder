class GitHub {
    constructor() {
        this.client_id = '5bab09d1d97ce4946439';
        this.client_secret = '13b4c94334ada86181a7251719fa94df71b56d24';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            // Returning Object
            // In ES6 using return profile
            // Is the same as profile: profile
            profile,
            repos
        }
    }
}