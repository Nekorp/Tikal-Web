<?php
    $result;
    $response;
    $inputJSON=file_get_contents('php://input');
    $input=json_decode( $inputJSON, TRUE );
    $secretKey="aqui-va-la-llave";
    $ip=$_SERVER['REMOTE_ADDR'];
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$input['captchaValue']."&remoteip=".$ip);
    $responseKeys = json_decode($response,true);
    if (intval($responseKeys["success"]) !== 1) {
        http_response_code(403);
        $result['status']="error";
        $result['message']='Error al resolver el captcha';
    } else {
        $msg="Este es un mensaje autogenerado por la forma de contacto de la página okuue.com\n\n".
            "Se recibió una solicitud de contacto con la siguiente información:\n\n".
            "Nombre: ".$input['nombre']."\n".
            "Email: ".$input['email']."\n".
            "Teléfono: ".$input['telefono']."\n".
            "Asunto: ".$input['asunto']."\n".
            "Mensaje: ".$input['mensaje']."\n\n".
            "IP del cliente:".$ip."\n\n".
            "--------------------------------------------------------------------------------\n".
            "   ___   _ _         ___    \n".
            "  / / |_(_) | ____ _| \ \   \n".
            " / /| __| | |/ / _` | |\ \  \n".
            " \ \| |_| |   < (_| | |/ /  \n".
            "  \_\\__|_|_|\_\__,_|_/_/   \n\n".
            "Tecnología que impulsa ideas\n";
        $mailSuccess = mail("info@okuee.com","Contacto okuee",$msg);
        if ($mailSuccess) {
            $result['status']='success';    
        } else {
            http_response_code(500);
            $result['status']="error";
            $result['message']='Error al enviar el email';
        }
    }
    print json_encode($result);
?>