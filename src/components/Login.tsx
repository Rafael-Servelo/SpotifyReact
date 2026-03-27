import { useEffect, useState } from "react";

function Login() {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const REDIRECT_URI = `${import.meta.env.VITE_BASE_URL}/callback`;
  const AUTH_URL = "https://accounts.spotify.com/authorize";
  const [asLogged, setAsLogged] = useState<boolean>(false);

  console.log(REDIRECT_URI);

  useEffect(() => {
    const token = localStorage.getItem("spotifyToken");
    if (token) {
      // Usuário já está logado, redireciona para o home
      setAsLogged(true);
    } else {
      setAsLogged(false);
    }
  }, []);

  const login = () => {
    const scope = "user-read-email user-read-private";
    window.location.href =
      `${AUTH_URL}?client_id=${CLIENT_ID}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&scope=${encodeURIComponent(scope)}`;
  };

  return (
    <div
      className="flex items-center justify-center h-screen w-screen z-100 backdrop-blur-sm text-white fixed"
      hidden={asLogged ?? false}
    >
      <button
        onClick={login}
        className="bg-green-500 px-6 py-3 rounded-lg text-lg font-bold cursor-pointer hover:bg-green-400 active:bg-green-600 active:scale-95 transition-all"
      >
        Login com Spotify
      </button>
    </div>
  );
}

export default Login;
