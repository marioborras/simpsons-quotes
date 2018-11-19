
const getQuote = async()=> {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    if (response.status === 200) {
        return response.json()
    }else {
        throw new Error("unable to fetch the quote")
    }
}
const quoteEl = document.querySelector("#quote")
const character = document.querySelector("#character")
const charImg = document.querySelector("#char-image")

const startQuote = async () => {
    const quote = await getQuote()
    console.log(quote)
    quoteEl.textContent = `"${quote[0].quote}"`
    character.textContent = `Source: ${quote[0].character}`
    charImg.src = quote[0].image

    
    
}

startQuote()

document.querySelector("#button").addEventListener("click",()=> {
    console.log("clicked")
    startQuote()

})