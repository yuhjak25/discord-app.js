// Load environment variables (e.g., APP_TOKEN and APP_ID) from a .env file.
require('dotenv/config')
const token = process.env.APP_TOKEN
const clientId = process.env.APP_ID

// Import necessary classes and methods from 'discord.js'.
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js')

// Import custom handlers for commands, buttons, modals, select menus, and events from 'handler.js'.
const {
  commandHandler,
  eventHandler,
  buttonHandler,
  modalHandler,
  selectMenuHandler,
} = require('./handler')

// Create a new Discord client instance with the necessary Gateway intents.
const client = new Client({
  intents: [GatewayIntentBits.Guilds], // Adjust intents as needed for your app.
})

// Register commands, buttons, modals, select menus, and events using the handlers.
const commands = commandHandler(client)
buttonHandler(client)
modalHandler(client)
selectMenuHandler(client)
eventHandler(client)

// Initialize the REST API client with the app token to register commands with Discord's API.
const rest = new REST({ version: '10' }).setToken(token)

// Register the commands asynchronously with Discord's API.
;(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    )

    // Register application commands globally using the provided clientId.
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

// Log in to Discord using the provided app token.
client.login(token)
