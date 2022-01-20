
var list  = document.getElementById("list")
const sites = [
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    },
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    },
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    },
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    },
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    },
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    }
    ,
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    },
    {
        nameSite : "Badjoun-chefferie",
        pictureSite : "../assets/bandjoun-chefferie.jpg"
    }
]

sites.map(site =>{
    let elementSite = document.createElement('div')
    let elementImg = document.createElement("img")
    elementImg.src = site.pictureSite
    elementImg.className = "site-picture"
    let elementText = document.createElement("p")
    elementText.textContent = site.nameSite
    elementSite.appendChild(elementImg)
    elementSite.appendChild(elementText)
    elementSite.className = "site-element"
    list.appendChild(elementSite)
})