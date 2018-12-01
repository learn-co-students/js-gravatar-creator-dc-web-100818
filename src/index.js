document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)

})

function handleSubmit(e) {
  event.preventDefault()
  clearScreen()
  let input = document.querySelector('#input').value

  let nums = md5.array(input)

  let colorsArr = nums.slice(0, 3)
  let colorRgb = `rgb(${colorsArr[0]}, ${colorsArr[1]}, ${colorsArr[2]})`

  let firstSet = nums.slice(0, 5)
  let secSet = nums.slice(5, 10)
  let thirdSet = nums.slice(10, 15)

  setColor(firstSet, 0, colorRgb)
  setColor(secSet, 1, colorRgb)
  setColor(thirdSet, 2, colorRgb)
  setColor(secSet, 3, colorRgb)
  setColor(firstSet, 4, colorRgb)
}

function setColor(arr, x, colors){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      document.getElementById(`${i}-${x}`).style.backgroundColor = colors
    }
  }
}

function clearScreen(){
  let icon = document.querySelector('#identicon').children
  let spans = Array.from(icon)
  spans.forEach(function(child){
    child.style.backgroundColor = "white"
  })
}
