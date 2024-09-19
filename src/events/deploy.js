const { Events } = require('discord.js')

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(
      `Logged in as ${client.user.tag}!\nConnected to ${client.guilds.cache.size} guild(s)!`
    )
    client.user.setActivity('with your commands!')
  },
}
