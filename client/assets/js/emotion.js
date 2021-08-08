function classifyEmotion() {

    let attentionVal = 0

    let attentionArr = []
    let emotionArr = []

    //loading the initial assets
    const initSDK = new Promise((res) => {
        res(CY.loader()
            .licenseKey("b71ba1d527c3f71b2b23f4dbc8a0297fad2ca1e8f6c6")
            .addModule(CY.modules().FACE_EMOTION.name)
            .addModule(CY.modules().FACE_ATTENTION.name)
            .source(CY.getUserMediaCameraFactory().createCamera())
            .load());
    });

    //initializing the camera and classification
    initSDK.then(({ start }) => start())

    window.addEventListener(CY.modules().FACE_EMOTION.eventName, (evt) => {
        if (evt.detail.output.dominantEmotion !== undefined)
            if (emotionArr.length < 50) 
                emotionArr.push(evt.detail.output.dominantEmotion)

            else if(emotionArr.length == 50){
                console.log(emotionArr);
                calcDominantEmotion(emotionArr)
            }
    })

    window.addEventListener(CY.modules().FACE_ATTENTION.eventName, (evt) => {
        attentionVal = ((evt.detail.output.attention) * 100).toFixed(2)
        
        if(attentionArr.length < 50)
            attentionArr.push(attentionVal)

        else if(attentionArr.length == 50)
            calcAvgAttention(attentionArr)           
    });

}

classifyEmotion()

