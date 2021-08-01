const URL = 'https://teachablemachine.withgoogle.com/models/e6dWe4EdP/';
let model, webcam, ctx, labelContainer, modelClasses;

async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < modelClasses; i++) {
        const classPrediction = prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

async function loop(timestamp) {
    webcam.update();
    await predict();

    //slowing down the frame rate and thus the prediction  
    setTimeout(() => {
        //passing loop recursively
        window.requestAnimationFrame(loop);
    }, 1000);
}

async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    // loading the model and the classes contained
    model = await tmPose.load(modelURL, metadataURL);
    modelClasses = model.getTotalClasses();

    //setting up the webcam
    webcam = new tmPose.Webcam(200, 200);
    await webcam.setup(); // request access to the webcam
    webcam.play();

    //passing the function loop 
    window.requestAnimationFrame(loop);

    // temporarily adding classes and results on the webpage
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < modelClasses; i++) { // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
}

init()

