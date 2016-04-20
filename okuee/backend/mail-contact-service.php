<?php
    $result;
    $response;
    $inputJSON=file_get_contents('php://input');
    $input=json_decode( $inputJSON, TRUE ); //convert JSON into array
    //print_r($input);
    $secretKey="La-llave";
    $ip=$_SERVER['REMOTE_ADDR'];
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$input['captchaValue']."&remoteip=".$ip);
    $responseKeys = json_decode($response,true);
    if (intval($responseKeys["success"]) !== 1) {
        http_response_code(403);
        $result['status']="error";
        $result['message']='Error al resolver el captcha';
    } else {
        $msg="La persona ".$input['nombre']." con email ".$input['email']." y telefono ".$input['telefono']." se contacto para el asunto ".$input['asunto']." dejando el mensaje ".$input['mensaje'];
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