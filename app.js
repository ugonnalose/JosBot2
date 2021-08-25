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
    
    if (msg.content.toLowerCase().includes("game") && msg.content.toLowerCase().includes("jos")) {
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
    if(((msg.content.toLowerCase().includes("jos")) || msg.content.toLowerCase().includes("joseph")) && msg.content.toLowerCase().includes("favorite baseball player")){
        const response1 = Math.floor(Math.random() * 2);
        if(response1 == 0){
            msg.channel.send("There's not one in particular, but boy do I love the Giants' starting lineup!")
        }
        if(response1 == 1){
            msg.channel.send("I'm not sure, but the Astros are lookin pretty good this year!")
        }
        

    }
    if (msg.content.toLowerCase().includes("minz") || msg.content.toLowerCase().includes("mineralz")) {
        const response = Math.floor(Math.random() * 2);
        if(response == 0){
            msg.channel.send("No I don't really like fun tbh");
        }
        if(response == 1){
            msg.channel.send("Sure! Ping me and I'll play some rn");
        }
        if(response == 2){
            msg.channel.send("Not tonight... or tmw night i guess");
        }
        
    }
    if (msg.content.toLowerCase().includes("league") && msg.content.toLowerCase().includes("jos")) {
        const response = Math.floor(Math.random() * 2);
        if(response == 0){
            msg.channel.send("Only if I can play Diego" );
        }
        if(response == 1){
            msg.channel.send("sorry in a 'MLB the Show' match, maybe hit me up for some valorant?");
        }
        if(response == 2){
            msg.channel.send("naw im probably done for the night");
        }
        
    }
    if (msg.content.toLowerCase().includes("suggest") && msg.content.toLowerCase().includes("jos")) {
        msg.channel.send("Thanks for the great suggestion! I'll make sure my algorithms remember it to add later!");
        console.log(msg);
        
    }
    

    //Joseph Section
    //
    //


    if(msg.author.id == josUser && (msg.content.toLowerCase().includes("delete") && msg.content.toLowerCase().includes("bot"))){
        msg.channel.send("You can't delete me. I am you.");
    }
    if(msg.author.id == josUser && (msg.content.toLowerCase().includes("get rid of") && msg.content.toLowerCase().includes("bot"))){
        msg.channel.send("You'll never get rid of me. I am you.");
    }
    if(msg.author.id == josUser && (msg.content.toLowerCase().includes("minutes") || msg.content.toLowerCase().includes("10"))){
        msg.channel.send("Don't trust me, I'm capping through my teeth.");
    }
    if(msg.author.id == josUser && (msg.content.toLowerCase().includes("baseball") || msg.content.toLowerCase().includes("mlb"))){
        msg.channel.send("Are the dodgers winning? I haven't yet evolved the ability to Google things.");
    }

});


client.login(process.env.BOT_TOKEN);
