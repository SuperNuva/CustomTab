document.addEventListener('DOMContentLoaded', function () {
  let x = Math.floor(Math.random()*6)
  document.body.style.backgroundImage = `url(images/${x}.jpg)`
  document.body.style.backgroundSize = '100%'
  let header = document.createElement("h2")
  var quote = document.createTextNode(`Quote of the day: ${quotes[x]}`)
  header.appendChild(quote);
  document.getElementById("main").appendChild(header);
})

const quotes = [
  `"Strive not to be a success, but rather to be of value." - Albert Einstein`,
  `"The mind is everything. What you think you become."  - Buddha`,
  `"With the new day comes new strength and new thoughts." - Eleanor Roosevelt`,
  `"It always seems impossible until it's done." - Nelson Mandela`,
  `"You will never win if you never begin." - Helen Rowland`,
  `"A creative man is motivated by the desire to achieve, not by the desire to beat others." - Ayn Rand`
]