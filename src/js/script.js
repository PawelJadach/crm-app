const navButton = document.querySelector('.fa-bars');
const navigation = document.querySelector('.navigation');
const nav = document.querySelector('.main');
const navLinks = document.querySelectorAll('li a');

navButton.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log('działa')
    navigation.classList.toggle('active');
    nav.classList.toggle('height');
})

for (let link of navLinks){

    link.addEventListener('click', (e)=>{
        for (let link of navLinks){
            link.classList.remove('active');
        }
        e.preventDefault();
        e.target.classList.add('active');
        navigation.classList.toggle('active');
    nav.classList.toggle('height');
    })
}