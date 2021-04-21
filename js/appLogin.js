const app = new Vue({
    el: '#app',
    data: {
        pass: '',
        passC: '',
        respuesta: '',
        correo:'',
        boton:'btn blue disabled'
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
                location.href = 'index.php'
            } else { 
                swal('No se pudo registrar');
            }
        },
        validarCorreo(){
            this.boton = 'btn blue disabled';
            const formData = new FormData();
            formData.append('correo',this.correo);
            axios.post('../api/loginRegistro/validarEmail.php', formData)
                    .then(resp => {
                        this.respuesta = resp.data;
                       if(resp.data == 'success'){
                            this.boton = 'btn blue';
                       }else{
                            swal('El correo electronico ya existe');
                       }
                    });
        }
    }
});