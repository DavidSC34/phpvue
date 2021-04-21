const app = new Vue({
    el: '#app',
    data: {
        pass: '',
        passC: '',
        respuesta: ''
    },
    methods: {
        registro() {
            if (this.pass == this.passC) {
                const form = document.getElementById('formRegistro');
                axios.post('../api/loginRegistro/registro.php', new FormData(form))
                    .then(resp => {
                        this.respuesta = resp.data;
                    });
            } else {
                alert('Los password no son iguales');
            }
        },
        direccionamiento() {
            if (this.respuesta == 'success') {
                location.href = 'index.php'
            } else {
                alert('No se pudo registrar');
            }
        }
    }
});