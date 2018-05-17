var Command = require("../plugins/command-system/command");
//const meme  = require("../memes");
const anime = ["./anime/349249.jpg","./anime/a.png","./anime/kaprfadz9rnvypesa2u9.png","./anime/latest.jpg","./anime/latestt.png","./anime/nhwz.jpg","./anime/q7vz.png","./anime/waifu.png","./anime/your-name-3.jpg"]
class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "anime",
            memberName: "anime",
            description: "sends an anime pic"
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
        //var rand = [Math.floor(Math.random() * memes.length)];
		
		msg.channel.send (  /*memes[rand]*/ "kawaii", {
			file : anime[Math.floor(Math.random() * anime.length)]
		}); 
    }
}

module.exports = PingCommand;