<h2>Liste des Utilisateurs</h2>

<tr>
    <td>Email</td>
    <td>FirstName</td>
    <td>LastName</td>
</tr>

<?php
foreach ($row as $user) {
    echo("<tr>");
    echo("<td>" . $user["email"] . "</td>");
    echo("<td>" . $user["firstname"] . "</td>");
    echo("<td>" . $user["lastname"] . "</td>");
    echo("</tr>");
}