
var button = document.querySelector("[data-sing]");

button.addEventListener("click", e => {
    let timerInterval
    e.preventDefault()
    console.log("timerInterval")
    Swal.fire({
            title: 'Ingreso exitoso!!',
            html: '<b></b>',
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
                window.location.href ='index.html'
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
})