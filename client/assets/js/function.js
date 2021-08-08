function openPopup(emotion){

    const popup = document.querySelector('.popup')
    const popupHead = document.querySelector('.popup-head')

    const yesToPopup = document.querySelector('#yes')
    const noToPopup = document.querySelector('#no')

    popup.style.display = 'block'
    popupHead.innerHTML = `We noticed that you were ${emotion} for quite some time. Do you want to play some music?`

    noToPopup.addEventListener('click', () => {
        popup.style.display = 'none'
    })
}

//function to calculate the most dominant emotion
function calcDominantEmotion(arr) {
    const emoText = document.querySelector('#emotion-text')

    //calculating the most dominant emotion out of the 50 gathered
    let max_count = 1, dominantEmo = arr[0], curr_count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else {
            if (curr_count > max_count) {
                max_count = curr_count;
                dominantEmo = arr[i - 1];
            }
            curr_count = 1;
        }
    }

    if (curr_count > max_count) {
        max_count = curr_count;
        dominantEmo = arr[arr.length - 1];
    }

    //printing on the frontend
    emoText.innerHTML = `${dominantEmo}`

    //clearing the array for the next prediction
    arr.length = 0

    //TODO - CREATE AN ARRAY WITH EMOTIONS AND CHECKING IF THESE ARE CONTAINED
    if (dominantEmo == 'Neutral' || dominantEmo == 'Happy') {
        openPopup(dominantEmo)
    }
}

//function to calculate the average attention
function calcAvgAttention(arr){
    const atnText = document.querySelector('#attention-text')

    let sum = 0, avgAtn
    for (let i = 0; i < arr.length; i++)
        sum += parseFloat(arr[i])

    avgAtn = (sum / arr.length).toFixed(2)

    //printing on the frontend
    atnText.innerHTML = `${avgAtn}`

    //clearing the array for the next prediction
    arr.length = 0
}