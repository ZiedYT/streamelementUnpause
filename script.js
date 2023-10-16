var urlParams = new URLSearchParams(window.location.search);
const accountID = urlParams.get('accountID'); 
const key =urlParams.get('key');  


function play(){
    fetch('https://api.streamelements.com/kappa/v3/overlays/'+ accountID +'/action', {
      method: 'PUT',
      headers: {
        'Accept': 'text/plain; charset=utf-8',
        'Authorization': 'Bearer '+ key,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ action: 'unpause' })
    }).then(response => {
      // Handle the response
      console.log(response);
      if(response.status==400)
      play();
    })
    .catch(error => {
      // Handle errors
      play();
    }); 
    
    }
    
    play()
    