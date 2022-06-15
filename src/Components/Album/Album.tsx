import styles from "./Album.module.css";
import MusicImg from "../music_placeholder.jpg";

type Props = {
  artistName: string;
  albumName: string;
  img_url: string;
  releaseDate: string;
  tracks: number;
  previewLink: string;
};

const Album = ({
  artistName,
  albumName,
  img_url,
  releaseDate,
  tracks,
  previewLink,
}: Props) => {
  return (
    <div className={styles[`album-card`]}>
      <div className={styles[`album-img`]}>
        {img_url.length > 0 ? (
          <img src={img_url} alt={`photo is not available`} />
        ) : (
          <img src={MusicImg} />
        )}
      </div>
      <div className={styles[`album-details`]}>
        <div className={styles[`album-name`]}>{albumName}</div>
        <div className={styles[`artist-name`]}>{artistName}</div>
        <div className={styles[`album-date`]}>{releaseDate}</div>
        <div className={styles[`album-tracks`]}>{tracks} tracks</div>
      </div>
      <div className={styles[`spotify-link`]}>
        <a href={previewLink}>Preview on Spotify</a>
      </div>
    </div>
  );
};

export default Album;
