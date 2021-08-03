
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

//fetching a joke using jokeAPI
// function getJoke() {
//     fetch('https://v2.jokeapi.dev/joke/Any')
//     .then(res => res.json())
//     .then(data => {
//         if(!data.error)
//             console.log(data);
//     })

// }

function oepnPopup(){
    const popup = document.querySelector('.popup')
    popup.style.display = 'block'

    const yesToJoke = document.querySelector('#yes')
    const noToJoke = document.querySelector('#no')
    const jokeBox = document.querySelector('#joke')

    //BUG - getting called 3 times 
    yesToJoke.addEventListener('click', () => {   
        
        //fetching joke from the API
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(res => res.json())
            .then(data => {
                if (!data.error && data.setup){
                    jokeBox.innerHTML = data.setup
                    jokeBox.innerHTML += data.delivery
                }
            })
    })

    noToJoke.addEventListener('click', () => {
        popup.style.display = 'none'
        jokeBox.innerHTML = ""
    })
}

function runPrediction() {

    let pre = ""

    const displaySize = { width: video.width, height: video.height }

    //setting a delay of 1s to slow down the prediction
    setInterval(async () => {

        try {

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

            //writing current mood on the frontend side
            const moodText = document.querySelector('#mood-text')
            moodText.innerHTML = `Your current mood is: ${emotionVal}`

            //if user has a new mood - open popup
            setTimeout(() => {
                
                if (pre != emotionVal) {
                    oepnPopup()
                }
                
                pre = emotionVal
            }, 5000)

        } catch (error) {
            console.log('Some error occured!')
        }

    }, 1000)
}

video.addEventListener('play', runPrediction)

