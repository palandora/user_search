const containerUser = document.querySelector(".container_user")
const labelMembers = document.querySelector("#counterMembers")
const textInput = document.querySelector("input")
const container = document.querySelector(".container")
const background = document.querySelector(".background_image")
const footer = document.querySelector(".footer")
const emptyState = document.querySelector(".empty_state")
const containerRecentMatches = document.querySelector(".container_recent_matches")

let recentMatches = []

const members = [{name:"Melanie Moshammer", mail:"m.moshammer@gmail.com", img:"melanie_moshammer.png"},
                {name:"Stefan Freisinger", mail:"stefan.freisinger@gmail.de", img:"stefan_freisinger.png"},
                {name:"Markus Stanzer", mail:"m.stanzer@outlook.de", img:"markus_stanzer.png"},
                {name:"Susanne Abraham", mail:"s.abraham@gmail.de", img:"susanne_abraham.png"},
                {name:"Leo Newmann", mail:"leo.newmann@gmx.com", img:"leo_newmann.png"},
                {name:"Magdalena Nahatma", mail:"m.nahatma@outlook.de", img:"magdalena_nahatma.png"},
                {name:"Alex Baumgartner", mail:"a.baumgartner@gmail.at", img:"alex_baumgartner.png"}]

createMembers(members)
labelMembers.textContent = members.length

function createMembers(array){
    const htmlString = array.map(function(obj) {
        return `
            <div class="user">
                <div class="bounds">
                    <img class="user_image" src="assets/thumbnails/${obj.img}">
                    <span class="username">${obj.name}</span>
                    <span class="usermail">${obj.mail}</span>
                    <img src="assets/icons/ic_next.svg" class="add_user">
                </div>
                <div class="divider"></div>
            </div>
        `
      }).join('')
      containerUser.innerHTML = htmlString
}

function setEmptyState(matches,word){
    if(matches == 0){
        emptyState.style.display = "block"
        emptyState.querySelector(".inner").innerHTML = `Sorry unfortunately we could't find anyone called <span>${word}<span> 🥺`
    }else{
        emptyState.style.display = "none"
    }
}

function pushToRecents(userClicked){
    //find clicked Obj in Array
    const match = members.find(function (member) {
        return member.name.indexOf(userClicked) > -1;
    });
    //push Obj to recent array
    recentMatches.push(match)
    //convert clicked Objs to HTML
   const htmlString = recentMatches.map(function(obj) {
    return `
        <div class="user">
            <div class="bounds">
                <img class="user_image" src="assets/thumbnails/${obj.img}">
                <span class="username">${obj.name}</span>
                <span class="usermail">${obj.mail}</span>
                <img src="assets/icons/ic_next.svg" class="add_user">
            </div>
            <div class="divider"></div>
        </div>
    `
     }).join('')
     containerRecentMatches.querySelector(".recent_matches").innerHTML = htmlString
}

function filterMembers(){
    textInput.addEventListener("input", (e)=>{
        const searchTerm = e.target.value.toLowerCase();
        const matches = members.filter((member)=>{
            return member.name.toLowerCase().includes(searchTerm)
        })
        labelMembers.textContent = matches.length
        createMembers(matches)
        setEmptyState(matches.length,e.target.value)
    })
}

function logMember(e){
    const userClicked = e.path[1].childNodes[3].textContent
    console.log(userClicked)
    pushToRecents(userClicked)
    const match = members.find(function (member) {
        return member.name.indexOf(userClicked) > -1;
      });
    console.log(match)


    textInput.value = userClicked
    container.classList.add("selected")
    textInput.setAttribute("disabled","")
    footer.textContent = "Not much going on here hmm? • Let's look for someone new 😍"
    background.src = "assets/background_images/background_image_blured.jpg"
}

function deleteMember(){
    textInput.value = ""
    container.classList.remove("selected")
    textInput.removeAttribute("disabled")
    createMembers(members)
    footer.innerHTML = "Press <span>ESC</span> for canceling the search"
    background.src = "assets/background_images/background_image.jpg"
}

filterMembers()

document.addEventListener("click", (e)=>{
    const current = e.target
    if(current.matches('.user .add_user')){
        logMember(e)
    }else if(current.matches('.delete_user')){
        deleteMember()
    }else{
        return
    }
})






