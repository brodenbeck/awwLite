$(function() {
	$.get("https://www.reddit.com/r/aww/.json", function(response) {

		var posts = response.data.children;

		posts.forEach(function(post) {
			var author = post.data.author;		
			var title = post.data.title;
			var thumbnail = post.data.thumbnail;
			var url = post.data.url;
			var comments = post.data.num_comments;

			var $container = $("<div class='container'>");
			var $makeThumbnail = $("<img class='thumbnail'>").attr("src", thumbnail);
			var $makeTitle = $("<h2 class='title' target='_blank'>").text(title);
			var $makeAuthor = $("<p class='author'>").text("author: " + author);
			var $makeComments = $("<p class='comments'>").text(comments + " comments");
			var $makeURL = $("<a class='url'>").attr("href", url);

			$("#reddit").append($container);
			$container.append($makeThumbnail, $makeTitle, $makeAuthor, $makeComments);
			$makeTitle.wrap($makeURL);
		});

	});

});