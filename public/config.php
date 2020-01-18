<?php

$host = "66.147.228.205";    /* Host name */ //66.147.228.205
$user = "leerecs_cinefile";         /* User */
$password = "AA}FRZ(wl+dcP-Gn9.fd&r*";         /* Password */
$dbname = "leerecs_filmotheque";   /* Database name */

// Create connection
$con = mysqli_connect($host, $user, $password, $dbname);
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}