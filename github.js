class GitHub {
    constructor() {
        this.client_id = '5bab09d1d97ce4946439';
        this.client_secret = '13b4c94334ada86181a7251719fa94df71b56d24';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            // Returning Object
            // In ES6 using return profile
            // Is the same as profile: profile
            profile
        }
    }
}