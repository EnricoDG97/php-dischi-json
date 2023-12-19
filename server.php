<?php
$string = file_get_contents('dischi.json');
// var_dump($string);

$data = json_decode($string, true);

if(isset($_GET['index'])) {
    $selected_disk = $data[$_GET['index']];
    $result = json_encode($selected_disk);
} else {
    $result = json_encode($data);
}

header('Content-Type: application/json');
echo $result;
?>
