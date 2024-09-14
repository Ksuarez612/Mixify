"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [navbarColor, setNavbarColor] = useState<string>("bg-customColor");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor("bg-red-500"); // Or another class for a different color
      } else {
        setNavbarColor("bg-customColor"); // Default color
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSpotifyLogin = () => {
    const clientId = ""; // Replace with your Spotify Client ID
    const redirectUri = "http://localhost:3000"; // Replace with your redirect URI
    const scope = "user-read-private user-read-email playlist-modify-public"; // Define the required scope

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scope)}`;

    // Redirect the user to Spotify authentication
    window.location.href = spotifyAuthUrl;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${navbarColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-extrabold text-red-500">
              Mixify
            </a>
          </div>

          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <a href="#discover" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              Discover
            </a>
            <a href="#listen" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              Listen
            </a>
            <a href="#evolve" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              Evolve
            </a>
          </div>

          {/* Spotify Login Button */}
          <div className="ml-auto">
            <button
              onClick={handleSpotifyLogin}
              className="text-sm font-medium px-4 py-2 rounded-md transition bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500"
            >
              Link Spotify
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
