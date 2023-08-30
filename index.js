console.log("WebGame")

//green character
//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)


//Refractor Function 
function devArc (url, left, bottom) {
    let newArc = document.createElement('img')
    newArc.src = url
    newArc.style.position = 'fixed'
    newArc.style.left = left + 'px' 
    newArc.style.bottom = bottom + 'px'
    document.body.append(newArc)
    return newArc 
}

function arc(url, left, bottom){
   let newArc = devArc(url, left, bottom)

   newArc.addEventListener('dblclick', () => {
    newArc.remove()
})
}
//Bonus Back Ground 


devArc('assets/green-character.gif', 100, 100)
devArc('assets/pine-tree.png', 450, 200)
devArc('assets/tree.png', 200, 300)
devArc('assets/pillar.png', 350, 100)
devArc('assets/crate.png' , 150, 200)
devArc('assets/well.png', 500, 425)
arc('assets/sword.png', 500, 405)
arc('assets/shield.png', 165, 185)
arc('assets/staff.png', 600, 100)

