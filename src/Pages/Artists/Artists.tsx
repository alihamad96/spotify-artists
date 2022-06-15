import Artist from "../../Components/Artist/Artist";
import SearchBar from "material-ui-search-bar";
import styles from "./Artists.module.css";
import { useEffect, useState } from "react";
import getArtists from "../../api/getArtists";
import { useDebouncedCallback } from "use-debounce";

type Artistt = {
  id: string;
  name: string;
  followers: number;
  rating: number;
  img_url: string;
};

const Artists = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [artistsList, setArtistsList] = useState<Artistt[]>([]);

  useEffect(() => {
    const artistReturn = localStorage.getItem("artist");
    if (typeof artistReturn === "string" && artistReturn.length > 0) {
      setKeyword(artistReturn);
    }
  }, []);

  const debounced = useDebouncedCallback((value) => {
    setKeyword(value);
  }, 500);

  const searchHandler = async (searchVal: string) => {
    const list = await getArtists(searchVal);
    setArtistsList(list);
  };

  useEffect(() => {
    if (keyword.length > 0) {
      searchHandler(keyword);
    }
  }, [keyword]);

  return (
    <>
      <div className={styles[`page-container`]}>
        <div className={styles[`search-box-container`]}>
          <SearchBar
            value={keyword}
            onChange={(searchVal) => debounced(searchVal)}
            placeholder={`Search for an artist...`}
          />
        </div>

        <div className={styles[`Artists-container`]}>
          {artistsList.length > 0 &&
            artistsList.map((artist) => (
              <Artist
                name={artist.name}
                id={artist.id}
                key={artist.id}
                img_url={artist.img_url}
                followers={artist.followers}
                rating={artist.rating}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Artists;
