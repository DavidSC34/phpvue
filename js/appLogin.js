const app = new Vue({
    el: '#app',
    data: {
        pass: '',
        passC: '',
        respuesta: '',
        correo: '',
        boton: 'btn blue disabled',
        menu: false
    },
    methods: {
        registro() {
            if (this.pass == this.passC) {
                const form = document.getElementById('formRegistro');
                axios.post('../api/loginRegistro/registro.php', new FormData(form))
                    .then(resp => {
                        this.respuesta = resp.data;
                        this.direccionamiento();
                    });
            } else {
                swal('Los password no son iguales');
            }
        },
        direccionamiento() {
            if (this.respuesta == 'success') {
                location.href = 'index.php';
            } else {
                swal('No se pudo registrar');
            }
        },
        validarCorreo() {
            if (this.validEmail(this.correo)) {
                this.boton = 'btn blue disabled';
                const formData = new FormData();
                formData.append('correo', this.correo);
                axios.post('../api/loginRegistro/validarEmail.php', formData)
                    .then(resp => {
                        this.respuesta = resp.data;
                        if (resp.data == 'success') {
                            this.boton = 'btn blue';
                        } else {
                            swal('El correo electronico ya existe');
                        }
                    });
            } else {
                swal('Escribe un correo valido');
            }
        },
        validEmail: function(email) {

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        login() {
            const form = document.getElementById('inicioSesion');
            axios.post('../api/loginRegistro/login.php', new FormData(form))
                .then(resp => {
                    this.respuesta = resp.data;
                    if (resp.data == 'success') {
                        location.href = 'http://localhost/phpvue/principal/index.php';
                    } else {
                        swal('Ususrio y/o contraseña incorrecta');
                    }
                });
        }
    }
});