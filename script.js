const verificar = () => {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#resposta');
    let teste = document.querySelector('div#teste');

    if (fano.value == 0 || fano.value > ano || fano.value < 0 || fano.value == ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS ')
    } else {
    let fsex = document.getElementsByName('radsex');
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    teste.innerHTML = ''
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >=0 && idade < 14){
            img.setAttribute('src', `./img/bebehomem.png`)
        } else if (idade < 28) {
            img.setAttribute('src', `./img/jovemhomem.png`)
        } else if (idade < 55) {
            img.setAttribute('src', `./img/adultohomem.png`)
        } else {
            img.setAttribute('src', `./img/idosohomem.png`)
        }
    } else if (fsex[1].checked) {
        genero = `Mulher` 
        if(idade >=0 && idade < 14){
            img.setAttribute('src', `./img/bebemulher.png`)
        } else if (idade < 28) {
            img.setAttribute('src', `./img/jovemmulher.png`)
        } else if (idade < 55) {
            img.setAttribute('src', `./img/adultomulher.png`)
        } else {
            img.setAttribute('src', `./img/idosamulher.png`)
        }
        
     
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${genero} de ${idade} anos.`
    teste.style.textAlign = 'center'
    
    teste.appendChild(img)
    }
}