const con=document.getElementById('bgimage');
const arr = ["./assets/Anime4.jpg","./assets/Anime1.jpg",
"./assets/Anime2.jpg",
"./assets/Anime3.jpg",
"./assets/Anime5.jpg",
"./assets/Anime6.jpg"]

const a = document.getElementsByClassName('image')

let i =0;
function img(){
    a[i].classList.remove('active');
    i++;
    if(i == arr.length){
        i=0;
    }
    a[i].classList.add('active');
    con.style.background=`url('${arr[i]}')no-repeat center/cover`;
}
// let j =6;
function imgg(){
    a[i].classList.remove('active');
    i--;
    if(i == -1){
        i=5;
    }
    a[i].classList.add('active');
    con.style.background=`url('${arr[i]}')no-repeat center/cover`;
}

let  change=(a)=>{
    con.style.background=`url('${arr[a]}')no-repeat center/cover`;
    
}

// setInterval(img,3000)