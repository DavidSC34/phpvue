<?php

include '../includes/sesion.php';
include '../includes/header.php';
?>
<div class="container center">
    <div class="row" style="margin:0,auto;width:80%;">
        <div class="col s12 m12 l12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Editar Post</span>
                    <form id="editarPost" autocomplete="off" @submit.prevent="editar">
                        <input type="text" name="titulo" placeholder="Titulo" required :value="formEditar.titulo">
                        <textarea name="codigo" class="materialize-textarea" placeholder="Escribe tu codigo" :value="formEditar.codigo"></textarea>
                        <textarea name="descripcion" class="materialize-textarea" placeholder="Escribe tu descripcion" :value="formEditar.descripcion"></textarea>
                        <select name="categoria" class="browser-default" required>
                            <!-- <option value="" disabled selected>Escoge una opcion</option> -->
                            <option value="php" :selected="formEditar.categoria ==='php'">PHP</option>
                            <option value="css" :selected="formEditar.categoria ==='css'">CSS</option>
                            <option value="html5" :selected="formEditar.categoria ==='html5'">HTML5</option>
                            <option value="mysql" :selected="formEditar.categoria ==='mysql'">MYSQL</option>
                            <option value="vue" :selected="formEditar.categoria ==='vue'">VUE</option>
                        </select>
                        <input type="hidden" name="id" :value="formEditar.id">
                        <input type="submit" value="Editar" class="btn blue">
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>

<?php include '../includes/footer.php'; ?>