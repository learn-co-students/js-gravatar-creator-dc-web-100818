function updateDOM() {
  debugger
  let input = document.querySelector('#input').value
  const icon = new Identicon(input)


  console.log(icon.generateNums())
}
