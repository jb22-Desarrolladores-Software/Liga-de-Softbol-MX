$('#formLogin').submit(function(e){
    e.preventDefault;
    var usuario = $s.trim($("usuario").val());
    var password = $s.trim($("password").val());

    console.log(usuario.length);

    if(usuario.length == " || password == "){
        swal.fire({
            type: 'Warning',
            title: 'Debe ingresar un usuario y/o password'
        });
        return false;
    }else{
        $.ajax({
            url:"login.php",
            type:"POST",
            datatype:"json",
            data: {usuario:usuario, password:password},
            success:function(data){
                if(data == "null"){
                    Swal.fire({
                        type: 'error',
                        title: 'usuario y/o password incorrecto',
                    });
                }else{
                    Swal.fire({
                        type: 'success',
                        title: 'Bienvenido administrador!',
                        confirmButtonColor: '#3085d6',
                        
                    });
                }
            }
        });
    }

});