const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


const josUser = 260281942635839488;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {

    //Anyone section
    //
    //
    
    if (msg.content.includes("game") && msg.content.includes("jos")) {
        const response = Math.floor(Math.random() * 2);
        if(response == 0){
            msg.channel.send("sorry playing MLB the show D:" );
        }
        if(response == 1){
            msg.channel.send("need to walk my dogs soon, maybe later");
        }
        if(response == 2){
            msg.channel.send("still working, I'll def be on tmw" );
        }
        
    }
    if((msg.content.includes("Jos")) || msg.content.includes("Joseph") && msg.content.includes("favorite baseball player")){
        const response1 = Math.floor(Math.random() * 2);
        if(response1 == 0){
            msg.channel.send("There's not one in particular, but boy do I love the Giants' starting lineup!")
        }
        if(response1 == 1){
            msg.channel.send("I'm not sure, but the Astros are lookin pretty good this year!")
        }
        

    }

    //Joseph Section
    //
    //


    if(msg.author.id == josUser && (msg.content.includes("delete") && msg.content.includes("bot"))){
        msg.channel.send("You can't delete me. I am you.");
    }
    if(msg.author.id == josUser && (msg.content.includes("get rid of") && msg.content.includes("bot"))){
        msg.channel.send("You'll never get rid of me. I am you.");
    }
    if(msg.author.id == josUser && (msg.content.includes("minutes") || msg.content.includes("10"))){
        msg.channel.send("Don't trust me, I'm capping through my teeth.");
    }
    if(msg.author.id == josUser && (msg.content.includes("baseball") || msg.content.includes("MLB"))){
        msg.channel.send("Are the dodgers winning? I haven't yet evolved the ability to Google things.");
    }

});


client.login("process.evn.BOT_Token");
