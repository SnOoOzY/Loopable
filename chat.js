$loginError = '';
if (!empty($_POST['username']) && !empty($_POST['pwd'])) {
	include ('Chat.php');
	$chat = new Chat();
	$user = $chat->loginUsers($_POST['username'], $_POST['pwd']); 
	if(!empty($user)) {
		$_SESSION['username'] = $user[0]['username'];
		$_SESSION['userid'] = $user[0]['userid'];
		$lastInsertId = $chat-insertUserLoginDetails($user[0]['userid']);
		$_SESSION['login_details_id'] = $lastInsertId;
		header("Location:index.php");
	} else {
		$loginError = "Invalid username or password!";
	}
}