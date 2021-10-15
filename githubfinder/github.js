class Github {
  constructor() {
    this.client_id = "123ed85bca1b9dd71957";
    this.client_secret = "ac63ca6c27d79c160efc4070f4a6802015681c9a";
    this.repos_count = 5;
    this.repos_sort = "creadte: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos,
    };
  }
}
