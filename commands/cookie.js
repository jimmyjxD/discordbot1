var Command = require("../plugins/command-system/command");

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "cookie",
            memberName: "cookie",
            description: "gives user a cookie."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
		msg.reply('Take this cookie!:cookie:');
    }
}

module.exports = PingCommand;