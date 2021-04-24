const app = new Vue({
    el: "#app",
    data: {
        menu: true,
        respuesta: '',
        listar: [],
        buscar: '',
        itemId: '',
        formEditar: {},
        userPost: '',
        session: ''
    },
    created() {
        axios.get('http://localhost/phpvue/api/crud/getPost.php')
            .then(resp => {
                this.listar = resp.data;
                // console.log(listar);
            });
        this.getUser();
        this.getId(); //busca si hay parametros
    },
    computed: {
        datosFiltrados() {
            return this.listar.filter(filtro => {
                return filtro.titulo.toUpperCase().match(this.buscar.toUpperCase()) || filtro.descripcion.toUpperCase().match(this.buscar.toUpperCase());
            });
        }
    },
    methods: {
        alta() {
            const form = document.getElementById('altaPost');
            axios.post('../api/crud/altaPost.php', new FormData(form))
                .then(resp => {
                    this.respuesta = resp.data;
                    if (resp.data == 'success') {
                        swal({
                            title: 'Buen trabajo',
                            text: 'Post guardado',
                            icon: 'success',
                            button: 'ok'
                        });
                        form.reset();
                    } else {
                        swal('El post no pudo ser guardado');
                    }
                });
        },
        getId() {
            // console.log('entro a get id');
            let uri = window.location.href.split('?');
            if (uri.length == 2) {
                let vars = uri[1].split('&'); //si viene mas de un parametro
                let getVars = {};
                let tmp = '';
                vars.forEach(function name(v) {
                    tmp = v.split('=');
                    if (tmp.length == 2) {
                        getVars[tmp[0]] = tmp[1];
                    }
                });
                this.itemId = getVars;
                // console.log(this.itemId.id);
                axios.get('http://localhost/phpvue/api/crud/getId.php?id=' + this.itemId.id)
                    .then(resp => {
                        this.formEditar = resp.data;
                    });
            }
        },
        editar() {
            const form = document.getElementById('editarPost');
            axios.post('../api/crud/editarPost.php', new FormData(form))
                .then(resp => {
                    this.respuesta = resp.data;
                    if (resp.data == 'success') {
                        location.href = "index.php";

                    } else {
                        swal('El post no pudo ser editar');
                    }
                });
        },
        eliminar(id) {

            swal({
                    title: 'Seguro que deseas eliminar el post',
                    text: 'Al eliminarlo no podras recuperarlo',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true,
                })
                .then((aceptar) => {
                    if (aceptar) {
                        //aqui ejecuta el ajax para eliminar el post
                        axios.get('http://localhost/phpvue/api/crud/eliminar.php?id=' + id)
                            .then(resp => {
                                if (resp.data == 'success') {
                                    swal('Post eliminado');
                                    //this.getCategoria()
                                } else {
                                    swal('Post no eliminado');
                                }
                            });
                    } else {
                        return false;
                    }
                });

        },
        getUser() {
            axios.get('http://localhost/phpvue/api/crud/getUser.php')
                .then(resp => {
                    this.userPost = resp.data;
                });
        }
    }
});