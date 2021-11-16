currentPageIndex = 0
totalPages = document.getElementsByClassName("step").length
nextPage()
function nextPage(){
    if (currentPageIndex == totalPages) return
    if (currentPageIndex > 0 && currentPageIndex <= totalPages){
        let currentId = `step${currentPageIndex}`
        let currentPage = document.getElementById(currentId)
        currentPage.style.display = "none"
    }
    currentPageIndex += 1
    if (currentPageIndex <= totalPages){
        let nextId = `step${currentPageIndex}`
        let nextPage = document.getElementById(nextId)
        nextPage.style.display = "flex"
    }
}

function previousPage(){
    if (currentPageIndex == 1) return
    if (currentPageIndex > 0 && currentPageIndex <= totalPages){
        let currentId = `step${currentPageIndex}`
        let currentPage = document.getElementById(currentId)
        currentPage.style.display = "none"
    }
    currentPageIndex -= 1
    if (currentPageIndex <= totalPages){
        let nextId = `step${currentPageIndex}`
        let nextPage = document.getElementById(nextId)
        nextPage.style.display = "flex"
    }
}