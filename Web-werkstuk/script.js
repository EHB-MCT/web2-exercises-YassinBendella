let buttons = document.getElementsByClassName("btn")
let previousButton = document.getElementsByClassName("btn-previous")
for (var button of buttons){
    button.onclick = buttonClick
}
for (var button of previousButton){
    button.onclick = previousPage
}
let dogOptions = 
{
    size: {
        min: 0,
        max: Infinity
    },
    properties: []
}


function buttonClick(e){
    let btnText = e.target.innerText
    if (currentPageIndex == 1){
        if (btnText === "Small"){
            dogOptions.size = {min: 0, max:40}
        }
        else if (btnText === "Medium"){
            dogOptions.size = {min: 40, max:70}
        }
        else if (btnText === "Large"){
            dogOptions.size = {min: 70, max:Infinity}
        }
    }
    else {
        dogOptions.properties.push(btnText)
    }
    console.log(dogOptions)
    nextPage()
}

function parseHeight(height){
    let heights = height.split(" - ")
    if (heights.length == 2){
        return {min: parseInt(heights[0]), max: parseInt(heights[1]) }
    }
    else{
        return {min: parseInt(heights[0]), max: parseInt(heights[0])}
    }
}

async function load(){
    let response = await sendRequest()
    let height = getSelectedHeight()
    let filteredBreeds = []
}

async function sendRequest(){
    let url = "https://api.thedogapi.com/v1/breeds"
    let response = await fetch(url,
        {
            method: 'GET',
            headers: {
                'x-api-key': '12f0f4b9-66c7-4802-b2a0-8cf9f5a13bc5' 
            }
        })
    let result = await response.json()
    return result
}
