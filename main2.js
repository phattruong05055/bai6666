let arr = [
    {
        username:"asfgdfgd",
        password:"12233",    
    },
    {
        username:"cbhhdbvfh",
        password:"62151",    
    },
    {
        username:"hdschdhs",
        password:"254142",    
    }
]
function dangnhap(){
    let user = document.getElementById("_username").value;
    let pass = document.getElementById("_password").value;
    let accounts = {
        username : user ,
        password : pass ,
    }
    arr.push = [accounts]
}
dangnhap();