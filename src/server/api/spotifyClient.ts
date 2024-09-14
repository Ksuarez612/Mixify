import SpotifyWebApi from 'spotify-web-api-node';

// Replace these with your actual Client ID and Client Secret
const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET';

// Create a new instance of the Spotify API client
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
});

// Function to authenticate and get the access token
export const authenticateSpotify = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (error) {
    console.error('Error authenticating with Spotify:', error);
  }
};

// Function to fetch some data, e.g., a playlist or an album
export const getPlaylist = async (playlistId: string) => {
  try {
    const data = await spotifyApi.getPlaylist(playlistId);
    return data.body;
  } catch (error) {
    console.error('Error fetching playlist:', error);
    throw error;
  }
};
