const { Events } = require('discord.js')

// Export a module to handle the 'InteractionCreate' event.
module.exports = {
  name: Events.InteractionCreate,
  // This function is triggered when an interaction occurs.
  async execute(interaction) {
    // If the interaction is a chat input command (slash command):
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName)

      if (!command) {
        console.error(
          `No command matching ${interaction.commandName} was found.`
        )
        return
      }

      // Try to execute the command, and handle errors.
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
      // Handle button interactions.
    } else if (interaction.isButton()) {
      const button = interaction.client.buttons.get(interaction.customId)

      if (!button) {
        console.error(`No button matching ${interaction.customId} was found.`)
        return
      }

      // Try to execute the button, and handle errors.
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
      // Handle modal interactions.
    } else if (interaction.isModalSubmit()) {
      const modal = interaction.client.modals.get(interaction.customId)

      if (!modal) {
        console.error(`No modal matching ${interaction.customId} was found.`)
        return
      }

      // Try to execute the modal, and handle errors.
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
      // Handle selectMenus interactions.
    } else if (interaction.isSelectMenu()) {
      const selectMenu = interaction.client.selectMenus.get(
        interaction.customId
      )

      if (!selectMenu) {
        console.error(
          `No select menu matching ${interaction.customId} was found.`
        )
        return
      }

      // Try to execute the selectMenu, and handle errors.
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
