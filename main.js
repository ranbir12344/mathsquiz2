function addUser()
{
    playerstore=document.getElementById("player1_name_input").value;
playerstore2=document.getElementById("player2_name_input").value;
localStorage.setItem("player1_name",playerstore);
localStorage.setItem("player2_name",playerstore2);

window.location="index.html";


}

































