let currentDate = showToday()

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
  
  if (document.querySelector('div.today')) {
    dateSection.removeChild(document.querySelector('div.today'))
  }

  dateSection.appendChild(newDiv)
  return today.getDate()
}

function showTime(){
  const today = new Date()
  const hours = String(today.getHours() < 12 ? today.getHours() : today.getHours() - 12)
  const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
  const seconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds()
  const currentTime = today.getHours() < 12 ? `${hours}:${minutes}:${seconds} AM` : `${hours}:${minutes}:${seconds} PM`

  const newDiv = document.createElement('div')
  const content = document.createTextNode(currentTime)
  newDiv.appendChild(content)
  newDiv.classList.add('time')  

  if (currentDate !== today.getDate()) {
    currentDate = showToday()
  }
  const timeSection = document.getElementById('time-section')
  if (document.querySelector('div.time')) {
    timeSection.removeChild(document.querySelector('div.time'))
  }
  timeSection.appendChild(newDiv)
}

showTime()
setInterval(showTime, 1000)