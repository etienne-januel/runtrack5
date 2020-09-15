<?php

class Utilisateurs_model {
    
    public function getUsers() {

    require("../config/db.php");
        
        $sql = "SELECT * from utilisateurs";

        try {
            $link->query($sql);
            foreach($link->query($sql) as $row) {
                print_r($row);
            }
        }
        
        catch(PDOException $e){
            echo $sql . "<br>" . $e->getMessage();
        }
        
        $link = null;

    }

    public function addUser($firstname, $lastname, $email) {
        
    }

}

?>