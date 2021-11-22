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


async function buttonClick(e){
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
    if (currentPageIndex == 4){
        await load()
    }
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

async function load(dogOptions){
    let response = await sendRequest(dogOptions)
    // console.log(response)
    filteredBreeds = response.filter(filterFunction)
    if (filteredBreeds.length > 0){
        console.log(filteredBreeds)
        sortedBreeds = filteredBreeds.sort((a,b) => a.sortIndex - b.sortIndex)
        bestFitbreed = sortedBreeds.shift()
        bestFitHtml(bestFitbreed)
        otherHtml(sortedBreeds)
    }
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

function filterFunction(breed){
    let dogHeight = parseHeight(breed.height.metric)
    if (dogHeight.min < dogOptions.size.min || dogHeight.max > dogOptions.size.max) return false
    if (breed.temperament == undefined) return false
    let characteristics = breed.temperament.split(",")
    let intersection = dogOptions.properties.filter(p => characteristics.includes(p))
    if (intersection.length == 0) return false
    breed.sortIndex = intersection.length
    return true
}

function bestFitHtml(breed){
    let breedNameHTML = document.getElementById("breed-name")
    let breedInfoHTML = document.getElementById("breed-info")
    let breedImgHTML = document.getElementById("breed-img")
    let breedHeight = parseHeight(breed.height.metric)
    let characteristics = breed.temperament.split(",")
    let intersection = dogOptions.properties.filter(p => characteristics.includes(p))
    breedNameHTML.innerText = breed.name
    breedInfoHTML.innerText = `${breedHeight.min}cm - ${breedHeight.max}cm / ${intersection.join(" / ")}`
    breedImgHTML.src = breed.image.url
}

function otherHtml(breeds){

}
