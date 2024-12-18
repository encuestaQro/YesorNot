const d = document;

d.addEventListener('DOMContentLoaded', e =>{
    moveButton();
    displayForm("#btnSi");
    sendMail();
})

const moveButton =() =>{
    document.getElementById("btnNo").style.transition = "transform 0.05s ease-in-out";
    document.getElementById("btnNo").addEventListener("mouseover", function(){
        const nuevaX = Math.random() * 750-225;
        const nuevaY = Math.random() * -400-50;
    
        this.style.transform = `translate(${nuevaX}px, ${nuevaY}px)`;
    })
}

const displayForm = (btn) => {
    document.addEventListener('click', e => {
        if (e.target.matches(btn)){
            document.getElementById('modal').classList.remove("addModal")
        }
    })
}

const sendMail = () =>{
    const $form = document.querySelector('.contact-form');
    $form.addEventListener('submit', e=>{
        e.preventDefault();
        let x = new FormData(e.target)
        fetch('https://formsubmit.co/ajax/ferralalejandro17@gmail.com',{
            method: 'POST',
            body: new FormData($form)
        })
        .then(resp => resp.ok? resp.json() : Promise.reject(resp))
        .then(json =>{
            console.log(json);
            $form.reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Gracias por la confirmacion!',
                showConfirmButton: false,
                timer: 1000
                })
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ups, tal vez se le olvido programar esta parte',
                showConfirmButton: false,
                timer: 1000
                })
        });
        document.getElementById('modal').classList.add("addModal")
    })
}