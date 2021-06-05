const containerUser = document.querySelector(".container_user")
const labelMembers = document.querySelector("#counterMembers")
const textInput = document.querySelector("input")

let lastMatches = []

const members = [{name:"Melanie Moshammer", mail:"m.moshammer@gmail.com", img:"melanie_moshammer.png"},
                {name:"Stefan Freisinger", mail:"stefan.freisinger@gmail.de", img:"stefan_freisinger.png"},
                {name:"Markus Stanzer", mail:"m.stanzer@outlook.de", img:"markus_stanzer.png"},
                {name:"Susanne Abraham", mail:"s.abraham@gmail.de", img:"susanne_abraham.png"},
                {name:"Leo Newmann", mail:"leo.newmann@gmx.com", img:"leo_newmann.png"},
                {name:"Magdalena Nahatma", mail:"m.nahatma@outlook.de", img:"magdalena_nahatma.png"},
                {name:"Alex Baumgartner", mail:"a.baumgartner@gmail.at", img:"alex_baumgartner.png"}]

createMembers(members)

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

function filterMembers(){
    textInput.addEventListener("input", (e)=>{
        const searchTerm = e.target.value.toLowerCase();
        const matches = members.filter((member)=>{
            return member.name.toLowerCase().includes(searchTerm)
        })
        createMembers(matches)
        labelMembers.textContent = matches.length
    })
}

filterMembers()



