var Command = require("../plugins/command-system/command");
var words = [,"1","2","3","4","5","6","7","8","9","10"]
class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "rate",
            memberName: "rate",
            description: "rates something."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
        var rand = Math.floor((Math.random() * words.length));
		/*message.reply*/ msg.channel.send("hmm... I'll rate " && words[rand]); 
    }
}

module.exports = PingCommand;