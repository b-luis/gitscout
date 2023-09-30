import axios from "axios";

export async function getUser(username) {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
}

export async function getFollowers(username) {
  const res = await axios.get(
    `https://api.github.com/users/${username}/followers`
  );
  return res.data;
}

export async function getFollowing(username) {
  const res = await axios.get(
    `https://api.github.com/users/${username}/following`
  );
  return res.data;
}
