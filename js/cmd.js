(function(){
	
	
	$("#cmd").terminal(function(command, terminal){
		if (command !== ''){
			command = command.toLowerCase().trim();
			switch (command){
				case "command":
				case "commands": 
					terminal.echo("'commands' 'clear'  'hello' 'about' 'skills' 'projects' 'blog' 'contact' 'education' 'languages' " +
							"'work history' 'hobbies' 'resume'");
		 			break;
				case "about":
					terminal.echo("My name's Christopher Ryan Keenan. I'm a full stack software engineer specializing " +
							"in Java, Java EE, JavaScript and Android development.");
					break;
				case "skills":
					terminal.echo("I have experience developing in Java, Java EE 7, and JavaScript. I am familiar with" +
							" Android and HTML5 API's. Design, layout, and style experience with HTML, XHTML, XML, CSS, JSF," +
							" Primefaces, and Bootstrap. Database experience with JPA, JPQL, and SQL using database servers Derby and" +
							" Google Cloud SQL. Server familiarity with GlassFish and Google App Engine (PAAS). I have proven knowledge" +
							" on web, native, and mobile development, distributed systems, and much more. I have the ability to" +
							" learn new programming languages, software, and systems both quickly and efficiently.")
					break;
				case "education":
					terminal.echo("I Studied Computer Science and Computer Engineering at New York Institute of Technology for three" +
							" years. There I learned Java, data structures, discrete structures, algorithm analysis, computational theory," +
							" statistics, calculus, physics, computer organization and architecture, and much more. Afterwards, on my own," +
							" I learned mobile application development with Android, followed by distributed system and server side" +
							" web development with Java EE 7. Then, I picked up JavaScript for client side development and gained experience" +
							" using the HTML5 API's, such as, WebRTC and WebAudio.");
					break;
				case "work history":
				case "work":
				case "jobs":
				case "job":
					terminal.echo("I was a software engineer intern at Mindray North America, a medical electronic manufacturer." +
							" I was responsible for testing, collecting logs, and compiling reports on various medical electronic" +
							" equipment, such as, patient monitoring systems. I started my own company, AppCrazy, where I released" +
							" numerous applications with thousands of downloads to the Google Play Store.");
					break;
				case "languages":
				case "language":
					terminal.echo("I speak English natively and some broken German. As in programming languages, I'm excellent in " +
							"Java and JavaScript. I also am familiar, though not often used, with Visual Basic.");
					break;
				case "projects":
					window.location.href="#projects";
					break;
				case "blog":
					window.location.href="#blog";
					break;
				case "contact":
					window.location.href="#contact";
					break;
				case "chrynan":
				case "":
					terminal.echo();
					break;
				case "hi":
				case "hello":
				case "hey":
					terminal.echo("Hey there! Check out my portfolio site and send me a message letting me know what you think.");
					break;
				case "hobby":
				case "hobbies":
				case "interest":
				case "interests":
					terminal.echo("Other than engineering, I've always had a great love and passion for music. " +
							"I'm a multi-instrumentalist with years of experience. I started playing my first " +
							"instrument, guitar, at around the age of seven. And still continue to play. I'm first a musician " +
							"and music is where I draw inspiration for all my other works. Also, I'm really into exercising. " +
							"I workout almost everyday.");
					break;
				case "resume":
				case "cv":
					window.location.href="resume.html";
					break;
				default:
					terminal.error("Unknown command");
					break;
			}
		}
	}, {
		greetings: "Learn more about me. Type 'commands' for a set of valid commands.",
		history: false,
		historySize: 0,
		completion: true,
		prompt: "chRyNaN> ",
		onClear: function(terminal){
			terminal.greetings(); 
		}
	});
	
	
})();
