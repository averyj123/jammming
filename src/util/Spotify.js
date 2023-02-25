//all checked
let token;
const clientID = 'edcbecd57de946c0b19776e14a5b213d';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
   getAccessToken() {
      
   if(token) {
      return token;
   } else {
      const access = window.location.href.match(/access_token=([^&]*)/);
      const expiration = window.location.href.match(/expires_in=([^&]*)/);
      if(access && expiration) {
         token = access[1];
         const expirationTime = Number(expiration[1]);
         console.log(`the token is: ${token} and the expiration time is: ${expirationTime}`);
         setTimeout(()=>token = '', expirationTime*1000);
         window.history.pushState('Access Token', null, '/');
         return token;
      } else {
         window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      }
   }
},

   onSearch(term){
   const accessToken = Spotify.getAccessToken();
   return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
   }).then(response => {
      return response.json();
   }).then(jsonResponse => {
      if(!jsonResponse.tracks){
         return [];
      }
      return jsonResponse.tracks.items.map(track =>  ({name: track.name, artist: track.artist, album: track.album, id: track.id}) );
      })
   }
}

export default Spotify;