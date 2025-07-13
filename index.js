// template_l1lxy3i
// service_busjp8s
// OYylWZHPRCLJHLpX7


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_busjp8s',
            'template_l1lxy3i',
            event.target,
            'OYylWZHPRCLJHLpX7'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";  
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on johnccreations21@gmail.com"
            );
        })
}