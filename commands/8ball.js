var Command = require("../plugins/command-system/command");
var messages = ["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again"," Don't count on it","My reply is no"," My sources say no","Outlook not so good","Very doubtful "];

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "8ball",
            memberName: "8ball",
            description: "predicts actions."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
		var rand = Math.floor((Math.random() * messages.length));
		/*message.reply*/ msg.channel.send(messages[rand]); 
    }
}

module.exports = PingCommand;