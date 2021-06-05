const containerUser = document.querySelector(".container_user")
const labelMembers = document.querySelector("#counterMembers")
const textInput = document.querySelector("input")
let totalUsers
console.log(textInput)

const members = [{name:"Melanie Moshammer", mail:"m.moshammer@gmail.com", img:"melanie_moshammer.png"},
                {name:"Stefan Freisinger", mail:"stefan.freisinger@gmail.de", img:"stefan_freisinger.png"},
                {name:"Markus Stanzer", mail:"m.stanzer@outlook.de", img:"markus_stanzer.png"},
                {name:"Susanne Abraham", mail:"s.abraham@gmail.de", img:"susanne_abraham.png"},
                {name:"Leo Newmann", mail:"leo.newmann@gmx.com", img:"leo_newmann.png"},
                {name:"Magdalena Nahatma", mail:"m.nahatma@outlook.de", img:"magdalena_nahatma.png"},
                {name:"Alex Baumgartner", mail:"a.baumgartner@gmail.at", img:"alex_baumgartner.png"}]

function addMember(image,name,mail){
    const cell = document.createElement("div")
    cell.classList.add("user")

    const divider = document.createElement("div")
    divider.classList.add("divider")

    const containerInner = document.createElement("div")
    containerInner.classList.add("bounds")

    const userImage = document.createElement("img")
    userImage.classList.add("user_image")
    userImage.src = `assets/thumbnails/${image}`

    const userName = document.createElement("span")
    userName.classList.add("username")
    const contentUser = document.createTextNode(`${name}`)
    userName.appendChild(contentUser);

    const userMail = document.createElement("span")
    userMail.classList.add("usermail")
    const contentMail = document.createTextNode(`${mail}`)
    userMail.appendChild(contentMail)

    const addUserBtn = document.createElement("img")
    addUserBtn.src = "assets/icons/ic_next.svg"
    addUserBtn.classList.add("add_user")
 
    //create inner container
    containerInner.appendChild(userImage)
    containerInner.appendChild(userName)
    containerInner.appendChild(userMail)
    containerInner.appendChild(addUserBtn)

    //append inner Element to cell
    cell.appendChild(containerInner)
    cell.appendChild(divider)

    return cell
}

function importMembers(){
    members.forEach(function(member) {
        containerUser.appendChild(addMember(member.img,member.name,member.mail))
      });
}

function setLabel(){
    const totalMembers = members.length
    labelMembers.textContent = totalMembers
}

function filterMembers(){
    textInput.addEventListener("input", (e)=>{
        console.log(e.target.value)
        //import only members who match the search criteria
    })
}

filterMembers()
importMembers()
setLabel()
