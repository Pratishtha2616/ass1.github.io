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