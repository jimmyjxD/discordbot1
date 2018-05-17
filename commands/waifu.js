var Command = require("../plugins/command-system/command");

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "waifu",
            memberName: "waifu",
            description: "tells people that she's my waifu."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
	
   
        if(msg.author.id=="439467695105376277"){
			 msg.reply("I'm your waifu :3")
       
        }
        else
			if(msg.author.id!="439467695105376277")
		{
            msg.channel.send("I'm <@439467695105376277>'s 's waifu :3. Not yours :P");
        }
    
    }
}

module.exports = PingCommand;