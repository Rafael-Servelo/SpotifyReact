import { useEffect } from "react";

function Callback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Access token:", data.access_token);
          localStorage.setItem("spotifyToken", data.access_token);

          // Redireciona para a home
          window.location.href = "/";
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 text-white">
      <p>Logando com Spotify...</p>
    </div>
  );
}

export default Callback;
