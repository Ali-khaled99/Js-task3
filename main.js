var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput")
var nameAlert = document.getElementById("nameAlert")
var urlAlert = document.getElementById("urlAlert")
var sitesList = [];

if(localStorage.getItem("sites") != null){
    sitesList = JSON.parse(localStorage.getItem("sites"))
    displaySites()
}


function addsite(){
    if(validateName() && validateUrl()){
        var site = {
            siteName : siteNameInput.value,
            siteUrl : siteUrlInput.value
        }
        sitesList.push(site)
        localStorage.setItem("sites" , JSON.stringify(sitesList))
        displaySites()
    }
}

function displaySites(){
    var temp = '';
    for(var i = 0 ; i < sitesList.length; i++){
        temp+= `<tr>
          <td>`+i+`</td>
          <td>`+sitesList[i].siteName+`</td>
          <td><a target="_blank" href=" ` + sitesList[i].siteUrl + ` "><button class="btn btn-success"><i class="fa-solid fa-eye pe-1"></i>Visit</button></a></td>
          <td><button onclick="deleteSite(`+i+`)" class="btn btn-danger"><i class="fa-solid fa-trash pe-1"></i>Delete</button></td>
        </tr>`
    }
    document.getElementById("myData").innerHTML = temp;
}


function deleteSite(x){
    sitesList.splice(x,1 )
    localStorage.setItem("sites" , JSON.stringify(sitesList))
    displaySites()
}

siteUrlInput.addEventListener("change" , validateUrl)
function validateUrl(){
    var urlRegex = /^(https|http):\/\/www\.[a-zA-Z]+\.[a-z]{2,3}$/
    if(urlRegex.test(siteUrlInput.value)){
        siteUrlInput.classList.add("is-valid")
        siteUrlInput.classList.remove("is-invalid")
        urlAlert.classList.add("d-none")
        return true
    }else{
        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")
        urlAlert.classList.remove("d-none")
        return false
    }
}



siteNameInput.addEventListener("change" , validateName)
function validateName(){
    var urlRegex = /^[a-zA-Z]{3,20}$/
    if(urlRegex.test(siteNameInput.value)){
        siteNameInput.classList.add("is-valid")
        siteNameInput.classList.remove("is-invalid")
        nameAlert.classList.add("d-none")
        return true
    }else{
        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")
        nameAlert.classList.remove("d-none")
        return false
        
    }
}



// Swal.fire({
//     title: "Site Name or Url is not valid, Please follow the rules below :",
//     html: `
//       You can use <b>bold text</b>,
//       <a href="#">links</a>,
//       and other HTML tags
//     `,
//     showCloseButton: true,
    
//     cancelButtonAriaLabel: "Thumbs down"
//   });