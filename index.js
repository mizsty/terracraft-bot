const Discord = require("discord.js")

const TOKEN = "OTYwODY5MDM0MzE5MDIwMDUy.YkwtBQ.5v8qftltllnwwtigvBx8MhfjEdA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "test"){
        message.reply("Gamu is sexy")
    }
})

client.login(TOKEN)

