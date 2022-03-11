function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "hangin_roms.html";
}

function changeColor()
{
    var background_color = document.getElementById("divi_color").value;
    document.body.style.backgroundColor = "red";
}