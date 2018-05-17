var Command = require("../plugins/command-system/command");

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "say",
            memberName: "say",
            description: "forces asuka to say something."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
		msg.delete()
    msg.channel.send(args.join(" "));
    }
}

module.exports = PingCommand;