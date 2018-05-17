var Command = require("../plugins/command-system/command");

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "delet",
            memberName: "delet",
            description: "deletes things."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
		/*async function purge(){
		msg.delete();
				}
		purge();
		if (mom == 1){
			purge();
		}*/
		msg.channel.bulkDelete(10)
    }
	
}

module.exports = PingCommand;