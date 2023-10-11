let perfil = " ";

switch (perfil) {
    case "administrador":
    case "Administrador":
    case "ADMINISTRADOR":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;

    case "asistente":
    case "Asistente":
    case "ASISTENTE":
        console.log("Usted tiene permisos de registrar, modificar y consultar datos");
        break;

    case "invitado":
    case "Invitado":
    case "INVITADO":
        console.log("Usted solo tiene permisos de consultar datos");
        break;
    
    case " ":
        console.log("Debe especificar el perfil del usuario");
        break;

    default:
        console.log("Debe especificar un perfil válido");
        break;
}