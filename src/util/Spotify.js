let token = ''
const clientID = 'edcbecd57de946c0b19776e14a5b213d';
const redirectURI = 'http://localhost:3000/';

const getAccessToken = () => {
   if(token) {
      return token;
   } else {
      let url = window.location.href;
      //let url = 'https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123';
      const access = url.match(/access_token=([^&]*)/);
      const expiration = url.match(/expires_in=([^&]*)/);
      if(access && expiration) {
         token = access[1];
         const expirationTime = expiration[1];
         console.log(`the token is: ${token} and the expiration time is: ${expirationTime}`)
         setTimeout(()=>{
            token = '';
            console.log('the token has expired.');
            window.location.href = 'http://localhost:3000/';
            url = window.location.href;
         }, (parseInt(expirationTime)*1000))
      } else {
         window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      }
   }
   return token;
}

const search = async() =>{
   const term = 'hello'
   console.log(`token: ${token}`);
   if (!token) {
      getAccessToken();
   }
   const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
         'Authorization': `Bearer BQA43MpFnsTMZs_JuSr2RB_k7dDI4f3jRW6RIMyU9kQy9lkAFZ0Ji-n0QIcd0ulBjkfD1rbbNZVdF8Y5IZsnysMovTBJYozdomtneaWUsyxB4m9MjgSBP1VUfQL0Nbk5mOmgPjEERoiunUl54yoph2iWpNLRGqEieMrgJ6ArwMWBwaghGG0VJrOe5en9facM0yAM8jQGNCZkeyLBhR0_IzBv6XtrjTw6`
      }
   });
   console.log(response);
}


export {getAccessToken, search};