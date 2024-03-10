function toggleMenu() {
    var x = document.getElementsByClassName('link');
    for (let i = 0; i<x.length;i++){
        x[i].classList.toggle('hide');
    }
}

function showEra(era) {
    var x = document.getElementsByClassName('home-display'); //hiding all divs
    for (let i = 0; i < x.length; i++){
        x[i].classList.add('hide');
        if(x[i].classList.contains(era)){
            x[i].classList.remove('hide');
        }
    }
  }
