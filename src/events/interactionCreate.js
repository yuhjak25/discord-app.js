const { Events } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    // Manejo de comandos (Chat Input)
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName)

      if (!command) {
        console.error(
          `No command matching ${interaction.commandName} was found.`
        )
        return
      }

      try {
        await command.execute(interaction)
      } catch (error) {
        console.error(error)
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: 'There was an error while executing this command!',
            ephemeral: true,
          })
        } else {
          await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
          })
        }
      }
    }

    // Manejo de botones
    else if (interaction.isButton()) {
      const button = interaction.client.buttons.get(interaction.customId)

      if (!button) {
        console.error(`No button matching ${interaction.customId} was found.`)
        return
      }

      try {
        await button.execute(interaction)
      } catch (error) {
        console.error(error)
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: 'There was an error while executing this button!',
            ephemeral: true,
          })
        } else {
          await interaction.reply({
            content: 'There was an error while executing this button!',
            ephemeral: true,
          })
        }
      }
    }

    // Manejo de modales
    else if (interaction.isModalSubmit()) {
      const modal = interaction.client.modals.get(interaction.customId)

      if (!modal) {
        console.error(`No modal matching ${interaction.customId} was found.`)
        return
      }

      try {
        await modal.execute(interaction)
      } catch (error) {
        console.error(error)
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: 'There was an error while executing this modal!',
            ephemeral: true,
          })
        } else {
          await interaction.reply({
            content: 'There was an error while executing this modal!',
            ephemeral: true,
          })
        }
      }
    }

    // Manejo de menús de selección
    else if (interaction.isSelectMenu()) {
      const selectMenu = interaction.client.selectMenus.get(
        interaction.customId
      )

      if (!selectMenu) {
        console.error(
          `No select menu matching ${interaction.customId} was found.`
        )
        return
      }

      try {
        await selectMenu.execute(interaction)
      } catch (error) {
        console.error(error)
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: 'There was an error while executing this select menu!',
            ephemeral: true,
          })
        } else {
          await interaction.reply({
            content: 'There was an error while executing this select menu!',
            ephemeral: true,
          })
        }
      }
    }
  },
}
