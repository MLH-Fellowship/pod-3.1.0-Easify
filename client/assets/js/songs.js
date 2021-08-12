function onYouTubeIframeAPIReady(){
    var e =document.getElementById("youtube-audio");
    t =document.createElement("img");
    t.setAttribute("id","youtube-icon");
    t.style.cssText="cursor:pointer;cursor:hand";
    e.appendChild(t);
    var a =document.createElement("div");
    a.setAttribute("id","youtube-player");
    e.appendChild(a);
    var o =function(play){
        var img =play?"IDzX9gL.png":"quyUPXN.png";
        t.setAttribute("src","https://i.imgur.com/"+img)};
    e.onclick=function(){
        (r.getPlayerState()===YT.PlayerState.PLAYING
            ||r.getPlayerState()===YT.PlayerState.BUFFERING)?(
                r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
    };
    var playlist_id = 'PLulmmfwRHGeLQuS3o01Hty7T9eB4kMt69';
    var r =new YT.Player("youtube-player",{
        height:"360",
        width:"480",
        // videoId: 'M7lc1UVf-VE',
        playerVars:{
            listType:'playlist',
            list: playlist_id
        },
        events:{
            'onReady':function(e){
                r.setPlaybackQuality("small");
                o(r.getPlayerState()!==YT.PlayerState.CUED)
            },
            'onStateChange':function(e){
                if(e.data===YT.PlayerState.ENDED){
                    o(false);
                }
            }
        }
    });
}
