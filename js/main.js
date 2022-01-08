let toggleBtn = document.querySelector('#menu-toggler');
let primaryMenu = document.querySelector('.primary-menu');

toggleBtn.onclick = () => {    
    primaryMenu.classList.toggle('active');
}
window.onscroll = () =>{
    primaryMenu.classList.remove('active');
}


let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.video-controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    });
});


// document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
//     btn.onclick = () =>{
//         let src = btn.getAttribute('data-src');
//         document.querySelector('.about .video-container .video').src = src;
//     }
// })