<?php
//Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//Datos para el Correo

$destinatario = "muke7881@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

//Enviando mensaje
if(mail($destinatario,$asunto,$carta)){
  header('Location:mensaje-de-envio.html')
}else{
  echo "Lo siento, hubo un fallo al enviar el correo."
}
?>
