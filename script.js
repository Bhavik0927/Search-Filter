const users = document.querySelector(".user-list");
const userName = document.querySelector("#user");

const userArr = [];

const getUserData = async() => {
    try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        // console.table(data);

        if(data){
            users.innerHTML = ""
        }
        data.map((user) => {
            const li = document.createElement('li');

            userArr.push(li);
            // console.log(userArr);

            li.insertAdjacentHTML('afterbegin', 
                `
                <div class="user-data">
                    <img src=${user.avatar_url} alt=${user.avatar_url} srcset="">
                    <div>
                        <p>${user.login}</p>
                        <a href=${user.html_url} target="_blank">${user.html_url}</a>
                    </div>
                 </div>
                `
            );

            users.appendChild(li);
        })

    } catch (err) {
        console.log(err)
    }
}

userName.addEventListener('input',(e) =>{
    const val = e.target.value;
    console.log(val);

    userArr.map((curElm) => {

        curElm.innerText.toLowerCase().includes( val.toLowerCase() ) ?
        curElm.classList.remove('hide') :
        curElm.classList.add('hide');

    })
})

getUserData();