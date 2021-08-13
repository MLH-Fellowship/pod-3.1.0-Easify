// const url = "https://localhost:5000"
const url = "https://143f7136e5aa.ngrok.io"
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
    // var o =function(play){
    //     var img =play?"IDzX9gL.png":"quyUPXN.png";
    //     t.setAttribute("src","https://i.imgur.com/"+img)};
    // e.onclick=function(){
    //     (player.getPlayerState()===YT.PlayerState.PLAYING
    //         ||player.getPlayerState()===YT.PlayerState.BUFFERING)?(
    //             player.pauseVideo(),o(!1)):(player.playVideo(),o(!0))
    // };
    var track_id = 'QGJuMBdaqIw'
    // var refr =document.getElementById("refresh");
    // reft =document.createElement("img");
    // reft.setAttribute("id","refresh-icon");
    // reft.style.cssText="cursor:pointer;cursor:hand";
    // refr.appendChild(t);
    // var refa =document.createElement("div");
    // refa.setAttribute("id","refresh-player");
    // refr.appendChild(refa);
    // reft.setAttribute("src","../imgs/refresh.png");
    // refr.onclick=function(){
    
    var playlist_id = 'PLulmmfwRHGeLQuS3o01Hty7T9eB4kMt69';
    player =new YT.Player("youtube-player",{
        height:"360",
        width:"480",
        host: 'http://www.youtube-nocookie.com',
        videoId: track_id,
        // playerVars:{
        //     listType:'playlist',
        //     list: playlist_id
        // },
        events:{
            'onReady':function(e){
                player.setPlaybackQuality("small");
                o(player.getPlayerState()!==YT.PlayerState.CUED)
            },
            'onStateChange':function(e){
                if(e.data===YT.PlayerState.ENDED){
                    o(false);
                }
            }
        }
    });
}
getHappySong.addEventListener('click', (e) => {
    console.log("hi")
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
        console.log("response");
        if(res){
            console.log(res);
            // document.getElementById("youtube-player").src = res;
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
    console.log("hi")
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
        console.log("response");
        if(res){
            console.log(res);
            // document.getElementById("youtube-player").src = res;
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