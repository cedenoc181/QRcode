const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


const onSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url, size);

    if(url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
        }, 1000);

    }
};

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

hideSpinner();

form.addEventListener('submit', onSubmit);
