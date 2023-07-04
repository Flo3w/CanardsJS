const btn = document.querySelector('.btn');
const spanImage = document.querySelector('.spanImage');

const fetchAPI = async() => {
    const reponse = await fetch('https://random-d.uk/api/random');
    const dataResp = await reponse.json();
    
    return dataResp;
}

fetchAPI().then((res) => console.log(res))

btn.addEventListener('click', () => {
    spanImage.innerHTML = "";
    let pic = document.createElement('img');
    
    fetchAPI().then((data) => {
        pic.setAttribute('src', data.url);
        spanImage.appendChild(pic);
        
        pic.style.border = "10px solid #b2a010";
        pic.style.borderRadius = "5px";
        pic.style.width = "300px";
    })
})