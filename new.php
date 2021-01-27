<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<button type="button" class="btn btn-primary btn-lg btn-block" id="btn" onclick="myfunc()">Click here to continue</button>
  <div id="title"></div>
 <div id="keywords"></div>
<div id="description"></div>
 <div id="og:title"></div>
<div id="og:description"></div>
<?php 
$URL = $_POST['url'];
echo '<div id="sitesrc">';
echo "<b>Click the above button </b>";
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,$URL);
 curl_exec($ch);
curl_close($ch);
echo '</div>'
?>
