const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    if (!response) throw new Error(`something went wrong: ${error}`);

    return data;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export default fetchFollowers;
