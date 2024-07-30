let room=document.querySelector('.room');
let btn=document.getElementById('btn');

btn.addEventListener('click', toggle);

function toggle()
{
    if(btn.innerText=='ON')
    {
        btn.innerText='OFF';
        room.style.backgroundColor='#333';
    }
    else{
        btn.innerText='ON';
        room.style.backgroundColor='yellow';
    }
};