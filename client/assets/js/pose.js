const URL = 'https://teachablemachine.withgoogle.com/models/e6dWe4EdP/';
let model, webcam, ctx, labelContainer, modelClasses;

async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    labelContainer.innerHTML = `Wrong Pose: <strong>${(prediction[0].probability * 100).toFixed(2)}%</strong>`
    labelContainer.innerHTML += `<br>Correct Pose: <strong>${(prediction[1].probability * 100).toFixed(2)}%</strong>`
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

    labelContainer = document.getElementById('label-container');
}

init()

