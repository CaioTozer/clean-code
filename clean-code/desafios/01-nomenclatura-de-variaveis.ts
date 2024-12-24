// Nomenclatura de variáveis

const githubCategories = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getGithubUserCategory(req, res) {
  const username = String(req.query.username);

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const getGithubUser = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (getGithubUser.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`,
    });
  }

  const githubUser = await getGithubUser.json();

  const ordergithubCategories = githubCategories.sort((a, b) => b.followers - a.followers);

  const currentUserCategory = ordergithubCategories.find((category) => githubUser.followers > category.followers);

  const result = {
    username,
    category: currentUserCategory?.title,
  };

  return result;
}

getGithubUserCategory(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);