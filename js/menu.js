var rootPath = '/';


function menu(menuId) {
	switch (menuId) {


		case 0:
			location.href = rootPath;
			break;
		case 1:
			location.href = rootPath + '';
			break;

		case 2:	//在线加点
			location.href = rootPath + 'download.html';
			break;


		case 100:      // 充值中心
			window.open('https://m.me/274265219098307', "_blank");
			break;
		case 101:      // 充值中心
			window.open('https://m.me/274265219098307', "_blank");
			break;
		case 102:      // 充值中心
			window.open('https://www.facebook.com/profile.php?id=61557180734518', "_blank");
			break;
		case 103:      // 充值中心
			window.open('https://bit.ly', "_blank");
			break;
		case 104:      // 充值中心
			window.open('https://bit.ly/', "_blank");
			break;
		case 105:      // 充值中心
			window.open('https://discord.gg/', "_blank");
			break;
		case 106:      // 充值中心
			window.open('https://bit.ly/', "_blank");
			break;


		case 1000:
			alert('Error');
			break;
		case 1001:
			alert('Register In-Game Function');
			break;
			case 1002:
			alert('Ranking In-Game Function');
			break;

		default:
			location.href = rootPath + '';
			break;
	}
}


