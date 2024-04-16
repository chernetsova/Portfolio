<?php

if (isset($_POST['phone']) && $_POST['phone']!="") {
    $feedback_phone = $_POST['phone'];
    $firstName = $_POST['firstName'];
    $mailto = array ('nameMail@paracels.ru');
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From:  info@paracels.ru\r\n";
    $subject = 'Заявка Парацельс';

    $message = '<html>
                    <head>
                        <titlse>'.$subject.'</title>
                    </head>
                    <body>
                        <table style="max-width: 600px; border: 1px solid #000000; border-collapse: collapse;">
                            <tbody>
                                <tr>
                                    <td colspan="2" style="background: #c1c1c1; font-weight: 600; text-align: center; padding: 20px">'.$subject.'</td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px; max-width: 200px">Имя</td>
                                    <td style="padding: 20px;">'.$firstName.'</td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px; max-width: 200px">Телефон</td>
                                    <td style="padding: 20px;">'.$feedback_phone.'</td>
                                </tr>
                            </tbody>
                        </table>
                    </body>
                </html>';

    foreach ($mailto as $mail) {

        mail($mail, $subject, $message, $headers);
    }

}

else {
    return false;
}

?>