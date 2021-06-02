var name = prompt("Adınız : ")
document.getElementById("myName").innerText = name


function getDate(){

    var date = new Date()
    console.log(date)

    var justdate = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()
    var day = date.getDay()

    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    justdate = justdate >= 10 ? justdate.toString() : "0" + justdate.toString()
    month = month >= 10 ? month.toString() : "0" + month.toString()

    hour = hour >= 10 ? hour.toString() : "0" + hour.toString()
    minutes = minutes >= 10 ? minutes.toString() : "0" + minutes.toString()
    seconds = seconds >= 10 ? seconds.toString() : "0" + seconds.toString()

    if(day == 1) {
        day = "Pazartesi";
    } else if(day == 2) {
        day = "Salı";
    } else if(day ==3) {
        day = "Çarşamba";
    } else if(day ==4) {
        day = "Perşembe";
    } else if(day ==5) {
        day = "Cuma";
    } else if(day ==6) {
        day = "Cumartesi";
    } else if(day ==7) {
        day = "Pazar";  
    }   

    var dateAndTime = `${justdate}.${month}.${year}   ${day}   ${hour}:${minutes}:${seconds}`
    document.getElementById("myClock").innerText = dateAndTime
    document.getElementById("myClock").textContent = dateAndTime

    setTimeout(getDate, 1000)
}

getDate()