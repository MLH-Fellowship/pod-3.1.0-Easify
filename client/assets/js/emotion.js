function classifyEmotion() {

    const emoText = document.querySelector('#emotion-text')
    const atnText = document.querySelector('#attention-text')

    let emotionVal = 'Neutral'
    let attentionVal = 0

    var arr = []

    //loading the initial assets
    const initSDK = new Promise((res) => {
        res(CY.loader()
            .licenseKey("b71ba1d527c3f71b2b23f4dbc8a0297fad2ca1e8f6c6")
            .addModule(CY.modules().FACE_EMOTION.name)
            .addModule(CY.modules().FACE_ATTENTION.name)
            .load());
    });

    //initializing the camera and classification
    initSDK.then(({ start }) => start())

    window.addEventListener(CY.modules().FACE_EMOTION.eventName, (evt) => {
        if (evt.detail.output.dominantEmotion !== undefined) {
            emotionVal = evt.detail.output.dominantEmotion
            emoText.innerHTML = `Your emotion: ${emotionVal}`
        }
    })

    window.addEventListener(CY.modules().FACE_ATTENTION.eventName, (evt) => {
        attentionVal = ((evt.detail.output.attention) * 100).toFixed(2)
        
        if(arr.length < 25)
            arr.push(attentionVal)

        else if(arr.length == 25){
            
            let sum = 0
            for (let i = 0; i < arr.length; i++) 
                sum += parseFloat(arr[i])   

            console.log(arr, sum/arr.length)
            
            arr.length = 0           
        }


        if(attentionVal < 40){
            atnText.innerHTML = `Your attention: ${attentionVal}`
        }
        else{
            atnText.innerHTML = ''
        }
    });

}

classifyEmotion()

