import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";
import styles from "./Artist.module.css";
import NumberFormat from "react-number-format";
import MusicImg from "../music_placeholder.jpg";

type Props = {
  name: string;
  followers: number;
  img_url: string;
  rating: number;
  id: string;
};

const Artist = ({ name, id, followers, img_url, rating }: Props) => {
  const navigate = useNavigate();

  const artistClickHandler = () => {
    navigate(`/artists/albums/${id}`);
  };
  return (
    <div className={styles[`artist-card`]} onClick={artistClickHandler}>
      <div className={styles[`artist-img`]}>
        {img_url.length > 0 ? (
          <img src={img_url} alt={`photo is not available`} />
        ) : (
          <img src={MusicImg} />
        )}
      </div>
      <div className={styles[`artist-details`]}>
        <div className={styles[`artist-name`]}>{name}</div>
        <div className={styles[`artist-followers`]}>
          <NumberFormat
            value={followers}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
          followers
        </div>
        <div className={styles[`artist-rating`]}>
          <StarRatings
            rating={rating}
            starRatedColor="gray"
            numberOfStars={5}
            starDimension={`20px`}
            starSpacing={`2px`}
            name="rating"
          />
        </div>
      </div>
    </div>
  );
};

export default Artist;
