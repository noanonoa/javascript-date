function showToday(){
  const today = new Date()
  function format(date){
    return date.toString().slice(4, 10) + ',' + date.toString().slice(10, 15)
  }

  const newDiv = document.createElement('div')
  const content = document.createTextNode(format(today))
  newDiv.appendChild(content)
  newDiv.classList.add('today')

  const dateSection = document.getElementById('date-section')
  dateSection.appendChild(newDiv)
}

showToday()