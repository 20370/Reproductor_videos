let listaVideo=document.querySelectorAll('.video-list .vid');
let mainVideo=document.querySelector('.main-video .vidd');
let title=document.querySelector('.main-video .title');

listaVideo.forEach(video =>{
    video.onclick=()=>{
        listaVideo.forEach(vid =>vid.classList.remove('active'));
        video.classList.add('active');
        
        if(video.classList.contains('active')){
            
            let src=video.children[0].getAttribute('src');
            mainVideo.src=src;

            let text=video.children[1].innerHTML;
            title.innerHTML=text;
            
        };
    };
});