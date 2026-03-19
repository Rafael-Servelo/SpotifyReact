import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ou outro método de roteamento

function Login() {
  const navigate = useNavigate();
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const REDIRECT_URI = `${import.meta.env.VITE_BASE_URL}/callback`;
  const AUTH_URL = "https://accounts.spotify.com/authorize";

  useEffect(() => {
    const token = localStorage.getItem("spotifyToken");
    if (token) {
      // Usuário já está logado, redireciona para o home
      navigate("/home");
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
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 text-white">
      <button
        onClick={login}
        className="bg-green-500 px-6 py-3 rounded-lg text-lg font-bold"
      >
        Login com Spotify
      </button>
    </div>
  );
}

export default Login;
