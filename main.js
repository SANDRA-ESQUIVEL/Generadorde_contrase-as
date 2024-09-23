let cantidad = document.getElementById("cantidad");
let botonUno = document.getElementById("generar");
let botonDos = document.getElementById("guardar").disabled =true;
let botonTres = document.getElementById("limpiar");
let contrasena = document.getElementById("contrasena");

const letrasMayusculas= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas= "abcdefghijklmnopqrstuvwxyz";
const numeros= "0123456789";
const simbolosCaracteres="!@#$%^&*()";
const cadenaCaracteres= (letrasMayusculas+letrasMinusculas+numeros+simbolosCaracteres);
    
        function generar(){
            
            let numeroDigitado = parseInt (cantidad.value);   
            if( numeroDigitado < 8){
                alert("La cantidad de caracteres tiene que ser mayor que 8");
                alert("Digita nueva cantidad");
                cantidad.value="";
                return
            }
        
                let password = " ";

                for(let i=0; i < numeroDigitado; i++){

                    let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
                    console.log(caracterAleatorio);

                    password+=caracterAleatorio;
                }
                
                contrasena.value= password;
            

                setTimeout(() => {
                    validarPassword(password);
                }, 400);

        }

        function validarPassword(password) {
            const letrasMayusculas= /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/.test(password);
            const numeros= /[0123456789]/.test(password);

            if (!letrasMayusculas) {
                alert("La contraseña es DEBIL: debe tener al menos una letra mayúscula.");
                alert("¡GENERE NUEVA CONTRASEÑA!");
                contrasena.value= "";
                document.getElementById("guardar").disabled = true;
                return
            }

            if (!numeros) {
                alert("La contraseña es DEBIL: debe tener al menos un número.");
                alert("¡GENERE NUEVA CONTRASEÑA!");
                contrasena.value= "";
                document.getElementById("guardar").disabled = true;
                return
            }

            if (letrasMayusculas && numeros) {
                alert("La contraseña es FUERTE.");
                alert("Favor Guardar Contraseña");
                document.getElementById("guardar").disabled = false;
            }
        }

        function guardar(){
        

            if (letrasMayusculas && numeros) {
                alert("Guardando contraseña.");
                alert("La Contraseña Que Se Guardo Es:"+ contrasena.value);
                contrasena.value= (password);
            }
        }

        function limpiar(){
            
            cantidad.value="";
            contrasena.value= "";
            document.getElementById("guardar").disabled=true;
            
        }




    
        
     











