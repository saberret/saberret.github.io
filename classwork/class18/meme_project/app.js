// 918abc7c9e2c4a5fbd2e9f7b253ec553 api key

var xhrReddit = $.get("https://www.reddit.com/r/news/new/.json");

xhrReddit.done(function(data) { 

	data.data.children.forEach(function(post, index) {
		if (index < 10) {
			// console.log(post.data.title);

			var postTitle = post.data.title;

			var postTitleNoPluses = post.data.title;


			postTitle = postTitle.split(' ');
			postTitle = postTitle.join('+');

			// console.log(postTitle);



			var xhrGif = $.get("http://api.giphy.com/v1/gifs/search?q=" + postTitle + "&api_key=918abc7c9e2c4a5fbd2e9f7b253ec553&limit=10");	

			xhrGif.done(function(data) {
				var firstMp4 = data.data[1].images.original_mp4.mp4; 

				$('.meme-wrap').append('<h1>' + postTitleNoPluses + '</h1>');

				$('.meme-wrap').append('<video src="' + firstMp4 + '" type="video/mp4" autoplay loop></video>');
			});

		}
	})

});			

			



