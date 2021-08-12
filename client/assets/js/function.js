const graphOpen = document.querySelector('#atn-graph-open')
const graphClose = document.querySelector('#atn-graph-close')
const graphBody = document.querySelector('#atn-graph-body')
let timeArr = [], atnChart, newChart

//function to show desktop notifications
function showNotification(title, message, clickAction, options){
    
    var img = './assets/imgs/logo.png'
    var text = `${message}`
    var notification = new Notification(`${title}`, { body: text, icon: img });
    
    //if clickAction is passed from the function allow clicks
    if (clickAction) {
        notification.onclick = function (event) {
            event.preventDefault(); // prevent the browser from focusing the Notification's tab

            //fetch emotions and
            //play music here  

            //if playMusic is recieved 
            if (clickAction == 'playMusic') {
                alert(`Playing ${options.emotion} music`)
            }
             
        }
    }
}

//function to calculate the most dominant emotion
function calcDominantEmotion(arr) {
    const emoText = document.querySelector('#emotion-text')

    //calculating the most dominant emotion out of the 50 gathered
    let max_count = 1, dominantEmo = arr[0], curr_count = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1])
            curr_count++
        else {
            if (curr_count > max_count) {
                max_count = curr_count
                dominantEmo = arr[i - 1]
            }
            curr_count = 1
        }
    }

    if (curr_count > max_count) {
        max_count = curr_count
        dominantEmo = arr[arr.length - 1]
    }

    //printing on the frontend
    emoText.innerHTML = `Your dominant emotion in last 5s was - <strong>${dominantEmo}</strong>`
    graphOpen.classList.remove('d-none')


    //clearing the array for the next prediction
    arr.length = 0

    //TODO - CREATE AN ARRAY WITH EMOTIONS AND CHECKING IF THESE ARE CONTAINED
    if (dominantEmo == 'Neutral' || dominantEmo == 'Happy') {
        var title = `Emotional check`
        var msgString = `We noticed that you were ${dominantEmo} for sometime, do you want to play some music? Click me to play some music`
        var clickAction = 'playMusic'
        var options = {
            emotion: dominantEmo
        }

        // showNotification(title, msgString, clickAction, options)
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
    atnText.innerHTML = `Your average attention in last 5s was - <strong>${avgAtn}%</strong>`


    let date = new Date()
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    let temp = {
        x: time,
        y: avgAtn
    }
    timeArr.push(temp)

    //clearing the array for the next prediction
    arr.length = 0
}

//function to plot the graph of attention
function plotAttentionGraph(attnArray) {

    //plot only the last 7 elements of the attnArray
    if (attnArray.length > 7)
        attnArray = attnArray.slice(-7)

    //plotting the chart from the array
    atnChart = document.getElementById('attentionChart').getContext('2d');
    newChart = new Chart(atnChart, {
        type: 'line',
        
        //chart data
        data: {
            datasets: [{
                label: '% of concentration',
                data: attnArray, 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
                tension: 0.1
            }]
        },

        //chart options
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//plot chart upon opening of the popup 
graphOpen.addEventListener('click', (e) => {
    if (timeArr.length != 0) {
        plotAttentionGraph(timeArr)
    }
    else{
        graphBody.innerHTML = `Please wait for some time...`
    }
})

//destroy the chart to prevent errors while plotting
graphClose.addEventListener('click', (e) => {
    if (newChart)
        newChart.destroy()
})

//refreshment break reminder
window.setInterval(() => {
    let title = `Refreshment Break!`
    let msgString = "You have been active since long, maybe take a break?"
    showNotification(title, msgString, false)
}, 60000)
