var Command = require("../plugins/command-system/command");
class PingCommand extends Command {
    constructor(client, cs) { super(client, { name: "addMeme", memberName: "addMeme", description: "adds a meme" });
        this.cs = cs; }
    async load(msg, args) {
        if (args[0].startsWith("http") == false) { msg.channel.send(args.join("link to an image, idiot.")); } else if (args[0].startswith("https://i.imgur.com")) {
            fs.readFile(path.join(__dirname + '../memes.json'), function read(err, data) {
                if (err) { throw err; }
                content = data;
                var memes = JSON.parse(content);
            });
            memes.push(args[0]);
            var memesJSON = JSON.stringify(links);
            var file = path.join(__dirname + '../memes.json');
            fs.writeFileSync(file, memesJSON);
        } else {
            try {
                imgur.setClientId('e2454aa21aa0c5a');
                imgur.setAPIUrl('https://api.imgur.com/3/');
                fs.readFile(path.join(__dirname + '../memes.json'), function read(err, data) {
                    if (err) { throw err; }
                    content = data;
                    var memes = JSON.parse(content);
                });
                imgur.uploadUrl(args[0]).then(function(json) { memes.push(json.data.link); var memesJSON = JSON.stringify(links); var file = path.join(__dirname + '/memes.json');
                    fs.writeFileSync(file, memesJSON); }).catch(function(err) { console.error(err.message); });
                msg.channel.send(args.join("thanks for the dank meme."));
            } catch (err) { msg.channel.send(args.join("Someone fucked up somewhere. I blame you. I'm flawless.")); }
        }
    }
}
module.exports = PingCommand;