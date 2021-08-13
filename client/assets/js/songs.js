const url = "https://easify-backend.herokuapp.com"
const getSadSong = document.querySelector('#get-sad-song')

const getHappySong = document.querySelector('#get-happy-song')

var player;

function onYouTubeIframeAPIReady(){
    var e =document.getElementById("youtube-audio");
    t =document.createElement("img");
    t.setAttribute("id","youtube-icon");
    t.style.cssText="cursor:pointer;cursor:hand";
    e.appendChild(t);
    var a =document.createElement("div");
    a.setAttribute("id","youtube-player");
    e.appendChild(a);
    var track_id = 'QGJuMBdaqIw'
    
    player =new YT.Player("youtube-player",{
        height:"360",
        width:"480",
        host: 'http://www.youtube-nocookie.com',
        videoId: track_id,
        events:{
            'onReady':function(e){
                player.setPlaybackQuality("small");
            },
            'onStateChange':function(e){
                if(e.data===YT.PlayerState.ENDED){
                }
            }
        }
    });
}
getHappySong.addEventListener('click', (e) => {
    fetch(url+"/songs",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        body: JSON.stringify({
            'emotion': 'happy',
        })
    })
    .then((response) => (response.json()))

    .then((res) => {
        console.log("response happy");
        if(res){
            player.loadVideoById(res.url)
        }
        else{
            alert("Couldn't fetch song url. Please try again.");
        }
    
    })
    .catch(err => {
        console.log(err);
    });
});

getSadSong.addEventListener('click', (e) => {
    fetch(url+"/songs",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        body: JSON.stringify({
            emotion: 'sad',
        })
    })
    .then((response) => (response.json()))

    .then((res) => {
        console.log("response sad");
        if(res){
            player.loadVideoById(res.url)
        }
        else{
            alert("Couldn't fetch song url. Please try again.");
        }
    
    })
    .catch(err => {
        console.log(err);
    });
});