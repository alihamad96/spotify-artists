const AUTH = () => {
  const client_id = "e29463798a4d4b109a1368caf2adaca8";
  const redirect_uri = "http://localhost:3000/artists";
  const state = "alihamad-spotify";

  localStorage.setItem("state", state);
  const scope = "user-read-private user-read-email";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);
  return url;
};

export default AUTH;
