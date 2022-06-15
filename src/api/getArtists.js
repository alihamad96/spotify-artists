import axios from "axios";
import QueryString from "qs";

const getAccessTokenFromRedirect = () => {
  const params = QueryString.parse(window.location.hash.slice(1));

  if (params.access_token && typeof params.access_token === "string") {
    return params.access_token;
  } else {
    return null;
  }
};

const getArtists = async (searchVal) => {
  const artistsReturned = [];
  const accessToken = getAccessTokenFromRedirect();
  localStorage.setItem("accessToken", accessToken);

  await axios
    .get(
      `https://api.spotify.com/v1/search?q=${searchVal}&type=artist&limit=${20}`,
      {
        params: { limit: 20, offset: 0 },
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      res.data.artists.items.forEach((artist) =>
        artistsReturned.push({
          name: artist.name ? artist.name : "",
          id: artist.id ? artist.id : "",
          followers: artist.followers.total ? artist.followers.total : 0,
          img_url: artist?.images[0]?.url ? artist.images[0].url : "",
          rating: artist.popularity ? artist.popularity / 20 : 0,
        })
      );
    });
  return artistsReturned;
};

export default getArtists;
