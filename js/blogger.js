/**
 *  Wrapper for the Blogger JSON API
 */

var Blogger = (function(blogId){
	//API Key obtained from console.developers.google.com
	var API_KEY = "?key=";
	var API_LOCATION = "https://www.googleapis.com/blogger/v3/";
	var blog = {}, posts = []; 
	
	function init(){
		//get the blog
		request(API_LOCATION + "blogs/" + BLOG_ID + API_KEY, function(result){
			blog = result;
		});
		
		//get the posts
		retrievePosts(function(results){
			posts = results;
		});
	}
	
	function request(location, successCallback){
		if (typeof location !== "string" || location == null || location.isEmpty()) return;
		$.ajax({
			url: location,
			type: "GET",
			callback: function(results){
				if (typeof successCallback !== "undefined") successCallback(JSON.parse(results));
			}
		});
	}
	
	function retrievePosts(callback){
		request(API_LOCATION + "blogs/" + blogId + "/posts" + API_KEY, function(result){
			callback(result.items);
		});
	}
	
	function retrievePost(postId){
		if (typeof postId === "undefined" || postId == null) return;
		for (var i = 0; i < posts.length; i++){
			if (posts[i].id = postId){
				return posts[i];
			}
		}
		return null;
	}
	
	function newestPost(){
		var post;
		for (var i = 0; i < posts.length; i++){
			if (typeof post !== "undefined"){
				if (newer(posts[i].published, post.published)){
					post = posts[i];
				}
			}
		}
		return post;
	}
	
	function newer(dateOneString, dateTwoString){
		var dOne = new Date(dateOneString);
		var dTwo = new Date(dateTwoString);
		if (dOne > dTwo || dOne === dTwo){
			return true;
		}else{
			return false;
		}
	}
	
	function isEmpty(obj){
		if (obj == null || typeof obj === "undefined"){
			return true;
		}
		
		if (obj.length > 0) return false;
		if (obj.length === 0) return true;
		
		if (Object.getOwnPropertyNames(obj).length > 0) return false;
		
		return true;
	}
	
	init();
	
	return {
		getAllPosts: function(){
			return posts;
		},
		getPost: retrievePost,
		getBlog: function(){
			return blog;
		},
		getLatestPost: newestPost,
		haveBlog: function(){
			return !isEmpty(blog);
		},
		havePosts: function(){
			return !isEmpty(posts);
		}
	};
		
});