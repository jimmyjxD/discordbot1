var Command = require("../plugins/command-system/command");
//const meme  = require("../memes");
//const memes = [,"./memes/arK6Lm6_700b_v4.jpg","./memes/facebook.png","./memes/fbimeme.png","./memes/fresh_meme_by_qpyd-db6umsu.jpg","./memes/fresh_memes_are_the_fuel_internets_working_on_640_32.jpg","./memes/fullsize.jpg","./memes/Funny.jpg","./memes/funny-animal-pictures-of-the-day-23-images.jpg","./memes/funny-game-of-thrones-memes-coverimage.jpg","./memes/Funny-memes-of-mr-bean.jpg","./memes/funny-youtube-comments-1png.png","./memes/gaymeme.jpg","./memes/monkey.jpg","./memes/nou.jpg","./memes/retardedanimal.jpg","./memes/t3_8h5lwm.jpg","./memes/taxmeme.jpg","./memes/tbaU2YB.jpg","./memes/z-funny-pictures-3-2.jpg","./memes/SIYYRzn0Dt-iAy8L_rHZ5W0YmFZGn3K5Id3B6IoM8F0.jpg","./memes/1zzMqEnZUyw8d5hES67Gohjra99EpxhK8JDdCLOyDfQ.png","./memes/R9Za-XGMeJkbizlR0bShAARBHM2u9iQCuWvPLKDBD8A.jpg","./memes/82VVGuiY9HteFkQ-uxlkoiXvEm2UAaVz8NEbaD6eWtM.jpg","./memes/WEMxvCFBAYENeCcIcYSM5D6RxSkM67alMhFEmAICq2s.jpg","./memes/VyrHdIcG-D1lhmKUxowUeu1Toih89MaDSGCaa742gC8.jpg","./memes/jxO836vCwJFZG0ZBQ8Yhg-Nff3jtCBeUtKefl61wf68.jpg","./memes/DChLTn98PHpQez2VjuOcWpAOGXU43A_jdGEYlEP25sA.jpg","./memes/PuREc8TLpbUczTYPWcXMdguoh8fiuLJbztVasdUqZws.jpg","./memes/Discord_Broke.jpg","./memes/DWCIr0AUQAEWL0s.png","./memes/Hm2plxJ.jpg","./memes/image-36.jpg","./memes/mjpwrdev88rqtxqksup4.png","./memes/28783548_610363602642265_1163755980517801984_n.jpg","./memes/31289912_396015137534852_23245438950213469_n.png","./memes/1524460913375-1745440932.png","./memes/ateveryone.PNG","./memes/DaByHEWXkAA-h9l.jpg","./memes/image-11-1.jpg","./memes/IMG_20180323_072005.jpg","./memes/IMG_20180501_002228.jpg","./memes/image.jpg","./memes/Dy7kpqRJZW6N9Gx4SefOv--u7AIwLlrj0gdZQC4GHSU.jpg","./memes/h8gBfoK3HMEFOr5hbaGg5qDCGvA6gk8LUgaoZD3XVDs.jpg","./memes/jUjRsdGet1Z4MIvpH-6-KTYOzbXHOKbd_vZOd4hLRyw.jpg","./memes/o10f__L2H_3SKS45tYSNZxL0Vjf19XiYfykTUdnH_74.jpg","./memes/Ojw4c_TluzV6pv0jgGCa_gzFwDmIVARIqA1ESkf9UUw.png","./memes/qqe8oyE0fOjKEqXT40rL3XOR0ZmarAnqEmH83OYilOg.png","./memes/s8gGV98GrEg_II2svumUuCEE555IUF3ScYfk7XaGtDc.png","./memes/x6i6Ew33EsH4xFuCQSeIqjdfCEmpPo6IlLwaH8xX7dU.jpg","./memes/XdEueChuheI_IkD06CMHHpNXyKh-LZ6gPZzROfTqED0.jpg"];

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "memeDebug",
            memberName: "memeDebug",
            description: "debugs a meme"
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
        fs.readFile(path.join(__dirname + '../memes.json'), function read(err, data) {
            if (err) {
                throw err;
            }
            content = data;
            var memes = JSON.parse(content);
        });
		try{
		msg.channel.send (  /*memes[rand]*/ "memes", {
			file : memes[parseInt(args[0])]
		}); 
	}
	catch{
		msg.channel.send("can't show that meme.")
	}
    }
}

module.exports = PingCommand;