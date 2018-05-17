var Command = require("../plugins/command-system/command");

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "spam",
            memberName: "spam",
            description: "forces asuka to spam something."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
		/*msg.delete()
        var i;
        console.log(args);
        var numToLoop=parseInt(args.pop());
        console.log(numToLoop);*/
		/*if(msg.author.id=="439467695105376277"){
			msg.delete()
        var i;
        console.log(args);
        var numToLoop=parseInt(args.pop());
        console.log(numToLoop);
			for (i = 0; i < numToLoop; i++) { 
			 //msg.channel.send(args[0])
			
			msg.channel.send(args.join(" "));
        }
		}*/
		 msg.delete()
        var i;
        console.log(args);
        var numToLoop = parseInt(args.pop());
        console.log(numToLoop);
		if (msg.author.id == "439467695105376277"){
						for (i = 0; i < numToLoop; i++) {
                    //msg.channel.send(args[0])

                    msg.channel.send(args.join(" "));
			}
		}
		else if (numToLoop>=10000){
			msg.channel.send("I don't have time to spam this much stuff!! I have a personal life you know !?");
		}
		else if (numToLoop>=100){
			msg.channel.send("lmao no");
		}
		else{
			for (i = 0; i < numToLoop; i++) {
                    //msg.channel.send(args[0])

                    msg.channel.send(args.join(" "));
			}
		}
		/*if (msg.author.id!="439467695105376277"){
			else if (numToLoop>=10000) {
				msg.channel.send("I don't have time to spam this much stuff!! I have a personal life you know !?");
			}
			 
		
			 if (numToLoop>=100) {
				msg.channel.send("Yeah, no");
			}
			else{
            for (i = 0; i < numToLoop; i++) { 
			 //msg.channel.send(args[0])
			
			msg.channel.send(args.join(" "));
               
                }
			}
			}
				else {
			for (i = 0; i < numToLoop; i++) {
                    //msg.channel.send(args[0])

                    msg.channel.send(args.join(" "));
			}
        }*/ 
		
				
    
			
    //for (i = 0; i < numToLoop; i++) {
                    //msg.channel.send(args[0])

                    //msg.channel.send(args.join(" "));
		/*	}
        for (i = 0; i < numToLoop; i++) { 
			 msg.channel.send(args[0])
			
			//msg.channel.send(args.join(" "));
        }*/
    
    

	}
}
module.exports = PingCommand;