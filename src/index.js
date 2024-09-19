require('dotenv/config')
const token = process.env.APP_TOKEN
const clientId = process.env.APP_ID

const { Client, GatewayIntentBits, REST, Routes } = require('discord.js')
const {
  commandHandler,
  eventHandler,
  buttonHandler,
  modalHandler,
  selectMenuHandler,
} = require('./handler')

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
})

const commands = commandHandler(client)
buttonHandler(client)
modalHandler(client)
selectMenuHandler(client)
eventHandler(client)

const rest = new REST({ version: '10' }).setToken(token)

;(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    )

    const data = await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    })

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    )
  } catch (error) {
    console.error('Error reloading commands:', error)
  }
})()

client.login(token)
