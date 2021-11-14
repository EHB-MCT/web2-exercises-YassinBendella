currentPageIndex = 0
nextPage()
function nextPage(){
    if (currentPageIndex > 1){
        let currentId = `step${currentPageIndex}`
        let currentPage = document.getElementById(currentId)
        currentPage.style.display = "none"
    }
    currentPageIndex += 1
    let nextId = `step${currentPageIndex}`
    let nextPage = document.getElementById(nextId)
    nextPage.style.display = "flex"
}

function previousPage(){
    if (currentPageIndex < 1) return
    let currentId = `step${currentPageIndex}`
    let currentPage = document.getElementById(currentId)
    currentPage.style.display = "none"
    currentPageIndex -= 1
    let nextId = `step${currentPageIndex}`
    let nextPage = document.getElementById(nextId)
    nextPage.style.display = "flex"
}