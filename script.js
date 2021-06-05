const containerUser = document.querySelector(".container_user");

function addMember(image,name,mail){
    const container = document.createElement("div")
    container.classList.add("user")

    const userImage = document.createElement("img")
    userImage.classList.add("user_image")
    userImage.src = `assets/thumbnails/${image}.png`

    const userName = document.createElement("span")
    userName.classList.add("username")
    const contentUser = document.createTextNode(`${name}`)
    userName.appendChild(contentUser);

    const userMail = document.createElement("span")
    userMail.classList.add("usermail")
    const contentMail = document.createTextNode(`${mail}`)
    userMail.appendChild(contentMail)
 


    //append all Elements to div ? chaining
    container.appendChild(userImage)
    container.appendChild(userName)
    container.appendChild(userMail)

    return container
}


const newMember = addMember("leo_newmann","Leo Newmann", "leo.newmann@gmail.com")
containerUser.appendChild(newMember)