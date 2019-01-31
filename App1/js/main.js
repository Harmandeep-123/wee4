// Your code here!
function myFunction() {
    var date = new Date();

    document.body.innerHTML = "<h1> today is :  " + (date.getMonth() + 1) + " / " + date.getDate() + " / " + date.getFullYear() + "</h>"
}