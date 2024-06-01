const handlesubmit=(e)=>{
    e.preventDefault();
    const val=e.target;
    const username=val[0].value;
    const email=val[1].value;
    const password=val[2].value;
    const phone=val[3].value;
    console.log(username,email,password,phone);
    const form = document.getElementById('root');
    form.style.display = 'none';
    const cards = document.getElementById('user-data');
    cards.innerHTML = `
        <div class="card">
            <h2>FORM DATA</h2>
            <p>Name:  ${username}</p>
            <p>Email: ${email}</p>
            <p>Password: ${password}</p>
            <p>Phone NUmber: ${phone}</p>
        </div>`
    ;
    cards.style.display = 'block';
}

// const r=document.getElementById("login-id").onclick=handlelogin;

// function handlelogin(){
//    const heading= document.getElementById("heading");
//    heading.textContent="Sign In To Account ";
//    const btn=document.getElementById("sign");
//    btn.innerHTML='Login';
//    const btn1=document.getElementById("google");
//    btn1.innerHTML="Login with google";

// }

document.getElementById("login-id").addEventListener("click",func);

function func(){
    const heading= document.getElementById("heading");
       heading.textContent="Sign In To Account ";
       const btn=document.getElementById("sign");
       btn.innerHTML='Login';
       const btn1=document.getElementById("google");
       btn1.innerHTML="Login with google";
}
