import axios from "axios";

const getArtistsAlbums = async (artistId) => {
  const albumsReturned = [];
  const accessToken = localStorage.getItem("accessToken");

  await axios
    .get(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album`,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      res.data.items.forEach((album) =>
        albumsReturned.push({
          img_url: album?.images[0].url || "",
          releaseDate: album?.release_date || "",
          tracks: album?.total_tracks || 0,
          artistName: album?.artists[0].name || "",
          albumName: album?.name || "",
          previewLink: album?.external_urls.spotify || "",
          id: album.id || "",
        })
      );
    });
  return albumsReturned;
};

export default getArtistsAlbums;
