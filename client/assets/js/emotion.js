
const video = document.getElementById('video')

//loading all the required models 
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./assets/emotion-models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./assets/emotion-models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./assets/emotion-models')
]).then(startVideo)

//starting video after models have been loaded
function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

function runPrediction() {
    const displaySize = { width: video.width, height: video.height }

    //setting a delay of 1s to slow down the prediction
    setInterval(async () => {

        //intitalising faceAPI and the face expression detection model
        const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, displaySize)

        //finding the emotion with max prediction probability
        const max = resizedDetections.expressions['neutral']
        var emotionVal = 'Neutral'

        for (let emotion in resizedDetections.expressions) {
            let temp = resizedDetections.expressions[emotion]
            if (temp > max)
                emotionVal = emotion
        }

        console.log(emotionVal);
    }, 1000)
}

video.addEventListener('play', runPrediction)

