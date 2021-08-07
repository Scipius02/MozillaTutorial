const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1; i<6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage); 
    // onclick handler
    newImage.addEventListener('click', (e)=>{
        displayedImage.src = e.target.src   // changes the source of the main image to that of the small image clicked
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e)=>{
    if (btn.getAttribute('class')==='dark') {
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});