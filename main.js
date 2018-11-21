const quoteEl = document.querySelector("#quote")
const character = document.querySelector("#character")
const charImg = document.querySelector("#char-image")
const button = document.querySelector("#button")

function randomize() {
    let rgbcolor;
    red = Math.floor(Math.random() * 250 + 0)
    green = Math.floor(Math.random() * 250 + 0)
    blue = Math.floor(Math.random() * 250 + 0)
  
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
    document.body.style.background = rgbColor
    button.style.background = rgbColor
    quoteEl.style.color = rgbcolor


  
    red = ("0" + red.toString(16)).substr(-2).toUpperCase()
    green = ("0" + green.toString(16)).substr(-2).toUpperCase()
    blue = ("0" + blue.toString(16)).substr(-2).toUpperCase()
  }
  
 
const getQuote = async()=> {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    if (response.status === 200) {
        return response.json()
    }else {
        throw new Error("unable to fetch the quote")
    }
}


const startQuote = async () => {
    let quote = await getQuote()
    quote = quote[0]
    quoteEl.textContent = `"${quote.quote}"`
    character.textContent = `- ${quote.character}`
    charImg.src = quote.image
    twitter.href =`https://twitter.com/intent/tweet?text=${quote.quote}" - ${quote.character}`
    randomize();
    
}

startQuote()

document.querySelector("#button").addEventListener("click",()=> {
    console.log("clicked")
    startQuote()

})

