onload=function (){
//  var logimg = document.getElementById("loginimg");
//  var c=1;
//  var time = setInterval(function(){
//  	c++;
//  	var url = 'img/p'+c+'-Loading.png';
//  	logimg.setAttribute('src',url);
//  },2000)
    //-----------------music
//  document.getElementById("music").setAttribute("src","img/playmusic.png");

}

		function aa(){
			alert("111");
			var play = document.getElementById("playmusic");
			var mymusic = document.getElementById("mymusic");
			var downmusic = document.getElementById("downmusic");
			mymusic.pause();
			downmusic.style.display=1;
			play.style.display=0;
		}