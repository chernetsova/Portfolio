<?php

if (isset($_POST['phone']) && $_POST['phone']!="") {
    
    $phone = $_POST['phone'];
    $first_name = $_POST['first-name'];
    $question = $_POST['question'];
    $form_title = $_POST['form-title'];
    $url = $_POST['url'];
    
    $mailto = array ('post1@mail.ru', 'post2@mail.ru');
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From:  info@arteks.ru\r\n";
    $subject = 'Новая заявка с LR Arteks';
    
    if(isset($first_name) && $first_name!=""){
      
        $row_name = '<tr>
                   <td style="padding: 20px; max-width: 200px">Имя</td>
                   <td style="padding: 20px;">'.$first_name.'</td>
               </tr>';  
    }
    
    if(isset($question) && $question!=""){
      
        $row_question = '<tr>
                   <td style="padding: 20px; max-width: 200px">Вопрос</td>
                   <td style="padding: 20px;">'.$question.'</td>
               </tr>';  
    }
    

    $message = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <table style="max-width: 600px; border: 1px solid #000000; border-collapse: collapse;">
                            <tbody>
                                <tr>
                                    <td>Заявка с формы</td>
                                    <td>'.$form_title.'</td>
                                </tr>'
                                .$row_name.$row_question.
                                '<tr>
                                    <td style="padding: 20px; max-width: 200px">Телефон</td>
                                    <td style="padding: 20px;">'.$phone.'</td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px; max-width: 200px">Ссылка</td>
                                    <td style="padding: 20px;">'.$url.'</td>
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