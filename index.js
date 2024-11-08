const form = document.getElementById('contactForm');
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbyCaDHny-Az9dyN6qCT2MakQPqstE4IGql9Kqe_1L0HZDoxkhWGsjvXe_aVw4430Pdb/exec', {
                method: 'POST',
                body: formData
            }).then(response => {
                return response.text();
            }).then(data => {
                alert('Form Submitted Successfully');
                form.reset();
            }).catch(error => {
                console.error('Error!', error.message);
            });
        });