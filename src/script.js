const contentList = document.querySelectorAll('.content');

// Global function to get element by id from document
let getById = function(id) { return document.getElementById(id) }

// Set first Tab
getById('content-01').style.display = 'block';
getById('tab-01').classList.add('active')

// Hide all before showing current one
function hideAll() {
  contentList.forEach(element => element.style.display = 'none')
}

// Click event to Show content fo the tab
function showTabContent(id) {
  hideAll()
  getById(id).style.display = 'block';
}

function activateButton() {
  document.querySelectorAll('button').forEach((el) => {el.classList.remove('active')})
  document.activeElement.classList.add('active');
}

// Set interval to change tabs every 4 seconds
let index = 1
setInterval( () => {
  hideAll()
  if (index <= 3) {
    getById(`content-0${index}`).style.display = 'block'
    document.querySelectorAll('button').forEach((el) => {el.classList.remove('active')})
    getById(`tab-0${index}`).classList.add('active')

  } else {
    getById(`content-01`).style.display = 'block'
    getById(`tab-01`).classList.add('active')
    getById(`tab-03`).classList.remove('active')
    index = 1
  }
  index ++
}, 4000)
