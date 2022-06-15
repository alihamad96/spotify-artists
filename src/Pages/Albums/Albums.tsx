import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArtistsAlbums from "../../api/getAlbums";
import Album from "../../Components/Album/Album";
import styles from "./Albums.module.css";

type Albums = {
  artistName: string;
  albumName: string;
  img_url: string;
  releaseDate: string;
  tracks: number;
  previewLink: string;
  id: string;
};

const Albums = () => {
  const [albumsList, setAlbumsList] = useState<Albums[]>([]);

  const { id: artistId } = useParams();
  useEffect(() => {
    const ar = async () => {
      const list = await getArtistsAlbums(artistId);
      setAlbumsList(list);
    };
    ar();
  }, []);

  albumsList.length > 0 &&
    localStorage.setItem("artist", albumsList[0].artistName);

  return (
    <>
      <div className={styles[`page-container`]}>
        <div className={styles[`albums-container`]}>
          {albumsList.length > 0 && (
            <div className={styles[`artist`]}>
              <div className={styles[`artist-name`]}>
                {albumsList[0].artistName}
              </div>
              <div className={styles.album}>Albums</div>
            </div>
          )}
          {albumsList.length > 0 &&
            albumsList.map((album) => (
              <Album
                artistName={album.artistName}
                albumName={album.albumName}
                img_url={album.img_url}
                releaseDate={album.releaseDate}
                tracks={album.tracks}
                previewLink={album.previewLink}
                key={album.id}
              />
            ))}
          {albumsList.length === 0 && (
            <div>This artist has no registered albums</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Albums;
