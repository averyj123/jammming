let token = '';
const clientID = 'edcbecd57de946c0b19776e14a5b213d';
const redirectURI = 'http://localhost:3000/';

const getAccessToken = () => {
   if(token) {
      console.log('bad is running (first if');
      return token;
   } else {
      console.log('the else is running');
      let url = window.location.href;
      const access = url.match(/access_token=([^&]*)/);
      const expiration = url.match(/expires_in=([^&]*)/);
      if(access && expiration) {
         token = access[1];
         const expirationTime = expiration[1];
         console.log(`the token is: ${token} and the expiration time is: ${expirationTime}`)
         setTimeout(()=>{
            token = '';
            console.log('the token has expired.');
            window.history.pushState('Access Token', null, '/');
         }, (parseInt(expirationTime)*1000))
      } else {
         window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      }
   }
   return token;
}

const search = () =>{
   //const term = 'hello'
   //window.history.pushState('Access Token', null, '/');
   token = '';
   getAccessToken();
   //console.log(`token: ${token}`);
   /*
   const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
         'Authorization': `Bearer BQA43MpFnsTMZs_JuSr2RB_k7dDI4f3jRW6RIMyU9kQy9lkAFZ0Ji-n0QIcd0ulBjkfD1rbbNZVdF8Y5IZsnysMovTBJYozdomtneaWUsyxB4m9MjgSBP1VUfQL0Nbk5mOmgPjEERoiunUl54yoph2iWpNLRGqEieMrgJ6ArwMWBwaghGG0VJrOe5en9facM0yAM8jQGNCZkeyLBhR0_IzBv6XtrjTw6`
      }
   });
   console.log(response);*/
}


export {getAccessToken, search};