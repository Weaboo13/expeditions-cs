//All of these variables are meant to connect to the javascript page, in order to be manipulated by certain functions such as the eventlistners.
var search= document.getElementById("search")
var logo= document.getElementById("logo")
// var backstory= document.getElementById("backstory")
var gamedescriptions= document.getElementById("gamedescriptions");
var clickme= document.getElementById("clickme");
// var chapters= document.getElementById("chapters");
var Characterdisplay= document.getElementById("Characterdisplay");
// var BusterSword= document.getElementById("BusterSword");
// var PremiumHeart= document.getElementById("PremiumHeart");
// var PrincessGuard= document.getElementById("PrincessGuard");
// var GaitlingGun= document.getElementById("GaitlingGun");
// var Conformer= document.getElementById("Conformer")
// var Masamune= document.getElementById("Masmamune")
//The eventlisteners are meant to execute a sample of text that would popup if you select one of multiple options on the dropbox, and you click on the enter button which would allow the text and image to appear for that category.
clickme.addEventListener("click", 
function(){
//Each of these if and else if statements contain the descriptions and images for each and every category available for the user to look at.
    var op = gamedescriptions.value;
    if (op === "Backstory") {
        Characterdisplay.innerHTML = ("Final Fantasy VII is an Japanese Role-Playing-Game that was released by SquareSoft for the original Playstation back in 1997. The game takes place on a world referred to in-game as the 'Planet' or simply 'Gaia.' The planet and life on it mainly feeds off a spiritual energy called the 'Lifestream' which is able to keep every being and planet as they know it alive. However, the energy of this planet is being drained for energy by the Shinra Electric Power Company, a world-dominating megacorporation set in the city of Midgar. Their factions and factories are weakening the Planet, causing major damage to both life and the planet itself. Throughout the game, major factions appear, such as, AVALANCHE, an eco-terrorist group seeking to destroy Shinra in order to save the Planet. The Turks, a group associated with Shinra's security forces. SOLDIER, an elite Shinra fighting force created by enhancing humans with Mako energy, turning them into potentially super soldiers. Finally there's the near-extinct human tribe known as the Cetra, which maintains a strong connection to both the Planet and the Lifestream. Throughout the game, we go through the adventure's of the main protagonist, Cloud Strife, and his comrades to take down Shinra from destroying the Planet's Lifestream, and to stop his archnemesis , Sephiroth, from potentially destroying the Planet.<br></br><img src='images/FF7 Logo.png' width=700px> ");
    }
    // else if (op === "Walkthrough") {
    //     chapters.innerHTML = ("The game starts off in Midgar <img src=''> ");
    // }
    else if (op === "Cloud Strife") {
        Characterdisplay.innerHTML = ("Cloud Strife is the main protaganist of the game, and is an arrogant and proud swords who wields the iconic Buster sword. He introduces himself as a former member of an elite warrior called 'SOLDIER' who was turned into a mercenary and joined the group, AVALANCHE.<br></br><img src='images/Cloud Portrait.jpg'width = 200px><img src='images/Cloud FFVIIArt.png'width = 350px>");
    }
    else if (op === "Tifa Lockhart") {
        Characterdisplay.innerHTML = ("Tifa Lockhart is one of the playable characters, and is to support Cloud and his comrades thoroughout the entire game. During battle, Tifa is the only character to use close quarters combat as her means of offense. Tifa is Cloud's childhood friend, but lost contact with him years ago after he joined 'SOLDIER.' When they reunited together after all those years, she convinces her to join the resistance group, AVALANCHE, in which she's a member of. Fun fact, she also runs the bar named, Seventh Heaven.<br></br><img src='images/Tifa Portrait.jpg'width = 220px><img src='images/Tifa FFVIIArt.png'width=200px>");
    }
    else if (op === "Aerith Gainsborough") {
        Characterdisplay.innerHTML = ("Aerith Gainsborough is a young woman who joins the resistance group, AVALANCHE. During battle, she's takes the defensive role for her team, by healing or granting partial invincibility for the entire party. During the story, she and Cloud meet together in the Sector 5 slums, and asks him to her personal bodyguard for the cost of one date. Overtime, the group learns she is the last surviving member of her race, known as the cetra.<br></br><img src='images/Aerith Portrait.jpg'width=200px><img src='images/Aerith FFVIIArt.png'width=270px>");
    }
    else if (op === "Barret Wallace") {
        Characterdisplay.innerHTML = ("Barret Wallace is another playable character in the game, and is the leader of the resistance group, ALVALANCHE. During battle, he mainly uses projectiles as a way to take down opponents, such as his gaitling gun that replaced his right hand. His teamates, Wedge, Riggs, and Jessie, oppose the ruiling company, Shinra, and their use of 'Mako' as an energy source which is supposedly killing the planet. Their of solution to saving the planet, is to simply bomb Mako Reactors, in order to stop the spread of the Mako energy source.<br></br><img src='images/Barret Portrait.png'width = 230px><img src='images/Barret FFVIIArt.png'width = 350px>");
    }
    else if (op === "Yuffie Kisargi") {
        Characterdisplay.innerHTML = ("Yuffie Kisargi is one of two optional characters, and she can be obtained early in the game. Yuffie is a female ninja princess and theif, and her weapon is an oversized shuriken that can be thrown like a boomerang during battle. Yuffie is the daughter of 'Godo Kisargi', the leader of 'Wutai' a culture based on real-world East Asia. Since their country lost the war against the Shinra Electric Power Company, they turned it into a resort town. Ever since, she felt her country lost its former glory and it didn't suit her very well. From there, she ran off and started her new lifestyle as a theif, hoping to become strong enough to make a change her country<br><br><img src='images/Yuffie Portrait.jpg'width=240px><img src='images/Yuffie FFVIIArt.png'width=300px>");
    }
    else if (op === "Sephiroth") {
        Characterdisplay.innerHTML = ("Sephiroth is the main antagonist of the game, and his goal is to become a god based upon his belief that he can merge with the Planet's Lifestream, which is an ethereal substance that streams beneath the surface of the planet og Gaia. His main weapon is the legendary Masamune, and is the strongest recruit in SOLDIER, and has been described as a super soldier due to his inhuman strength and discipline in combat. His main mission is to destroy the Planet by calling upon Meteor, and absorb all of the Planet's lifestream to become one with 'Godhood.'<br></br><img src='images/Sephiroth Portrait.jpg'width=250px><img src='images/Sephiroth FFVIIArt.png'width=645px>");
    }
})