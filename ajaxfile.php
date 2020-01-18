<?php include "config.php";

$response = array();
$posts = array();
//$result=mysqli_query($con,"SELECT * FROM `smfwh_messages`" );

$result=mysqli_query($con,"SELECT * FROM `smfwh_messages`, `smfwh_attachments`
WHERE `smfwh_attachments`.`id_msg`=`smfwh_messages`.`id_msg`
ORDER BY `smfwh_messages`.`id_msg` DESC" );


while($row=mysqli_fetch_array($result)) { 
  $title = preg_replace('/[^A-Za-z0-9\-]/', ' ', $row['subject']);
  $color=$row['icon'];
  $img='/img/'.$row['icon'].'.gif';
  $author=$row['author'];
  $des=$row['body']; 
  $id_msg=$row['id_msg'];
  $id_attach=$row['id_attach'];
  $file_hash=$row['file_hash'];


  /*
  id_topic
  id_board
  poster_time
  id_member
  id_msg_modified
  
  poster_name
  copyright
  poster_email
  poster_ip
  smileys_enabled
  modified_time
  modified_name
  body
  icon
  approved
  thumbnail
  */

  /*
  $result_avatar=mysqli_query($con,"SELECT * FROM `smfwh_messages`, `smfwh_attachments` 
  WHERE `smfwh_attachments`.`id_member`=`smfwh_messages`.`id_member`
  ORDER BY `smfwh_messages`.`id_member` DESC" );

  while($row_avatar=mysqli_fetch_array($result_avatar)){
  $id_member=$row_avatar['id_member'];
  $file_hash_avatar=$row_avatar['file_hash'];

  
  $img="&#47;Readfile&#47;avatar.php?sid=$id_member%5f$file_hash_avatar";
  $img = str_replace("%5f", "_", $img);
  $img = str_replace('&#47;', '/', $img); }
  */

  $mp3 = "/Readfile/index.php?sid=$id_attach%5f$file_hash.mp3";
  $mp3 = str_replace("%5f", "_", $mp3);
  //$mp3 = rawurlencode($mp3);

  $posts[] = array('title'=> $title, 'color'=> $color, 'img'=> $img, 'author'=> $author,
  'id'=> $id_msg, 'mp3'=> $mp3, 'route'=> $mp3, 'show'=> 'false');
 

} 


$response['items'] = $posts;

//print_r($response);


header('Content-Type: application/json');
//echo json_encode($posts, JSON_PRETTY_PRINT);
echo json_encode($response, JSON_PRETTY_PRINT);

/*
$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($response));
fclose($fp);
*/
?>