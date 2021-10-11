const sounds=[
    'CLAP', 
    'HIHAT', 
    'KICK', 
    'OPENHAT', 
    'BOOM', 
    'RIDE', 
    'SNARE', 
    'TOM', 
    'TINK'
];

sounds.forEach((sound) => {

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn. addEventListener('click', () => {
        stopS();
        document.getElementById(sound).play();
    })

    document.getElementById('Cuadritos').appendChild(btn);
    
});
function stopS(){

    sounds.forEach((sound) => 
    {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime=0; 
    });
}
