const { Collection } = require('discord.js')
const fs = require('node:fs')
const path = require('node:path')

function commandHandler(client) {
  client.commands = new Collection()
  const commands = []

  const foldersPath = path.join(__dirname, 'commands')
  const commandFolders = fs.readdirSync(foldersPath)

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder)
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith('.js'))

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file)
      const command = require(filePath)

      if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command)
        commands.push(command.data.toJSON())
      } else {
        console.log(
          `[⚠️] The command at ${filePath} is missing "data" or "execute" property.`
        )
      }
    }
  }
  return commands
}

function eventHandler(client) {
  const eventsPath = path.join(__dirname, 'events')
  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith('.js'))

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file)
    const event = require(filePath)
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args))
    } else {
      client.on(event.name, (...args) => event.execute(...args))
    }
  }
}

function genericHandler(client, type, folderName) {
  client[type] = new Collection()
  const items = []

  const foldersPath = path.join(__dirname, 'components', folderName)
  const itemFolders = fs.readdirSync(foldersPath)

  for (const folder of itemFolders) {
    const itemsPath = path.join(foldersPath, folder)
    const itemFiles = fs
      .readdirSync(itemsPath)
      .filter((file) => file.endsWith('.js'))

    for (const file of itemFiles) {
      const filePath = path.join(itemsPath, file)
      const item = require(filePath)

      if ('data' in item && 'execute' in item) {
        client[type].set(item.data.customId, item)
        items.push(item.data)
      } else {
        console.log(
          `[⚠️] The ${type.slice(
            0,
            -1
          )} at ${filePath} is missing "data" or "execute" property.`
        )
      }
    }
  }
}

function buttonHandler(client) {
  genericHandler(client, 'buttons', 'buttons')
}

function modalHandler(client) {
  genericHandler(client, 'modals', 'modals')
}

function selectMenuHandler(client) {
  genericHandler(client, 'selectMenus', 'selectMenus')
}

module.exports = {
  commandHandler,
  eventHandler,
  buttonHandler,
  modalHandler,
  selectMenuHandler,
}
