const images = [
    {
        src: 'https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'tiger',
    },
    {
        src: 'https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'lion',
    },
    {
        src: 'https://images.unsplash.com/photo-1476922027627-aa7293e3aaa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'deer',
    },
    {
        src: 'https://images.unsplash.com/photo-1648402279767-cf3e3721508e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vbmtleXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'monkey',
    }
]

let currentIndex = 0;
let totalImages = images.length
let showLoader = false

function previousImageCard(){
    if (currentIndex == 0) {
        currentIndex = totalImages-1
    }else{
        currentIndex--
    }
    showLoader = !showLoader
    loader();
    setTimeout(() => {
        showLoader = !showLoader
        showImg();
        loader();
    }, 1000);
}

function nextImageCard() {
    if (currentIndex == totalImages-1) {
        currentIndex = 0
    }else{
        currentIndex++
    }
    showLoader = !showLoader
    loader();
    setTimeout(() => {
        showLoader = !showLoader
        showImg();
        loader();
    }, 1000);
}

function loader() {
    if (showLoader) {
        document.getElementById('img').style.display = 'none';
        document.getElementById('description').style.display = 'none';
        document.getElementById('loader').style.display = 'block';
    }else{
        document.getElementById('img').style.display = 'block';
        document.getElementById('description').style.display = 'block';
        document.getElementById('loader').style.display = 'none';
    }
}

function showImg() {
    document.getElementById('img').setAttribute('src', images[currentIndex].src);
    document.getElementById('description').innerText = images[currentIndex].name
}

showImg();