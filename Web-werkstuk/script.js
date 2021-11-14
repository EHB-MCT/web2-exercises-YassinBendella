function parseHeight(height){
    // https://www.w3schools.com/jsref/jsref_split.asp
    let heights = height.split(" - ")
    if (heights.length == 2){
        return {min: parseInt(heights[0]), max: parseInt(heights[1]) }
    }
    else{
        return {min: parseInt(heights[0]), max: parseInt(heights[0])}
    }
    
}

function getSelectedHeight(){
    let selectedheight = select.options[select.selectedIndex].value
    return selectedheight
}

async function load(){
    clearHtml()
    let response = await sendRequest()
    let height = getSelectedHeight()
    let filteredBreeds = []
    for (let breed of response){
        let breedHeight = parseHeight(breed.height.metric)
        if (height === "small" && breedHeight.max <= 40){
            filteredBreeds.push(breed)
        }
        else if (height === "medium" && breedHeight.max <= 70 && breedHeight.min > 40){
            filteredBreeds.push(breed)
        }
        else if (height === "large" && breedHeight.max > 70){
            filteredBreeds.push(breed)
        }
    }
    for (let breed of filteredBreeds){
        html(breed)
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

function html(breed){
    let container = document.createElement("div")
    let info = document.createElement("div")
    let name = document.createElement("h3")
    let height = document.createElement("p")

    name.innerText = breed.name
    height.innerText = breed.height.metric

    info.appendChild(name)
    info.appendChild(height)

    container.appendChild(info)

    let breeds = document.getElementById("breeds")
    breeds.appendChild(container)
}

function clearHtml(){
    let breeds = document.getElementById("breeds")
    breeds.innerHTML = ""
}