//These variables are what connect the elements from the HTML page, to the Javascript page in order to be manipulated by certain functions such event listeners or if/else if statments.
var infocategory = document.getElementById("infocategory");
var execute = document.getElementById("execute");
var mychoices = document.getElementById("mychoices");
//This event listener mainly utilizes the button, as a signal in order to execute the text and images on screen.
execute.addEventListener("click",
    function() {
        //Each of these else if and if loops, are meant to spawn text and images, based on what category the user clicks on. Based on these loops, the outcome would be true based on what the user selects in the following options of the dropbox.
        var op = infocategory.value;
        if (op === "What did you create?") {
            mychoices.innerHTML = ("What I created was basically a database, that talks about Final Fantasy VII. The reason I created a database, was becaues my teacher. Mr Hesby, gave me suggestions for what I can do for an interractive HTML page, based off what I do during my free time (which was video games). One of those suggestions was a video game database, and from there I decided to dedicate this database to one of my favorite video games of all time FFVII. This database mainly contains the background info and several descriptions and immages for most of the characters that you see or play as throughout the whole game.<br></br><img src= 'HowToDatabase/database backstory.png'width=550px><img src= 'HowToDatabase/database sample.png'width=550px>")
        }
        else if (op === "How does the project work overall and what are some specifics of the code and how do those work?") {
            mychoices.innerHTML = ("The project works overall with the use of DOM. DOM is mainly the standard for accessing documents. It's a platform and language-neutral interface that allows programs and scripts to access and manipulate elements, structure, and the style of the document. With my HTML file, it contains different elements such as an input id tag(which creates a dropdown box), a button id tag(which creates a clickable button), and a div id tag which helps create the text that would show up on the page itself. With the javascript page, the way it can manipulate the HTML file and execute actions on the preview page, is by connecting the elemnents/objects with the use getElementById tags. From there the Javascript file can detected all of the elements/objects that are in the HTML page, and the rest of that would be included inside specific element/objects, such as the option tags that are included in the select id tag (which are the options that are included inside of the dropbox). Other major functions in the javascript file include an addeventlistener, which gives a signal to the button to spawn the text and images that are included in a certain category. The final major code are else if/if loops, which basically contain the text and images by adding an var.innerHTML tag. The var mainly contains the div id tag of mychoices, which connects to every single text and image in the else if/if loops. Reason they're all the same div id, is because I want to execute the text and images one at a time only. If they had multiple different div id tags, each piece of text and images wouldn't be replaced and simply stay on the page until it restarts. So with one, it would allow the text and images to be replaced by another set based on what the user choices in the dropbox. Based on what choice was settled by the user(mainly in the html page), that outcome would come true and execute what codeblock written inside the loop(Like this text and images). It would also depend on what conditions are set inside of the if/else if loop(mainly inside of the parentheses which say op (meaning operation like a math term) === 'Show text') I also included comment tags inside both the html and javascript, just in case for anyone who's inspecting the code can read them and see what each function does.<br></br><img src='HowToDatabase/database button and div tag.png'><img src='HowToDatabase/database dropbox.png'><img src='HowToDatabase/database elements.png'><img src='HowToDatabase/database functions.png'><img src='HowToDatabase/database loop.png'>")
        }
        else if (op === "How has this project changed your connection and understanding of what it means to interact with something?") {
            mychoices.innerHTML = ("How this project has changed my connection and understanding of what it means to interact with something, is by making something that the user can manipulate and make certain changes. Just like my generative art, I beieve this project has made me understand what it means to have an interactive website. Insstead of having the ability to execute basic commands like move a shape around the page with your cursor, I believe causing major changes to the page itself gives itself more interaction because of the user's ability to make something out of the page as they please, instead of simply interacting with something that is permanently built in and unchangeable. With my pages, I allow the reader/user to check out any of the info I gave on FFVII or to simply see how the overall prokect was made. If they simply don't have the time to read the page, I put in multiple links to various other pages I made in the past that they can access at their leisure.<br></br><img src='https://www.ndevr.io/wp-content/uploads/2017/03/iot.jpg'width=250px><img src= 'http://marketingconfessions.com/wp-content/uploads/2011/10/facebookapps5.png'width=550px>");
        }
        else if (op === "What is one thing you would change if you had more time?") {
            mychoices.innerHTML = ("One thing that I could change if I had more would be either, increase the amount of info on my database or dedicate this database to another game. Reason why I want to increase more information, is because it sort of felt incomplete and that I wanted to include other major characters and important events throughout the Final Fantasy VII. I also might've wanted to dedicate the database to another video game that I also highly praise, because I never really thought of making any list of any other video game database before I decided on Final Fantasy VII. Although, I probably wanted to choose this one to challenge myself, for the sake of having to write about a more complex game than something like Super Mario Bros.<br></br><img src='http://www.thelokengroup.com/site/wp-content/uploads/2016/06/more-info-button.jpg'width=450px><img src='https://images4.alphacoders.com/538/thumb-1920-53838.jpg'width=450px>");
        }
    });