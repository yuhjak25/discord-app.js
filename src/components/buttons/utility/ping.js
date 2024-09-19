const ButtonPressLog = require('../../../db/models/ButtonPressLog')

module.exports = {
  data: {
    customId: 'ping-button',
  },
  async execute(interaction) {
    try {
      // Search for the registered button on the database
      let buttonPressLog = await ButtonPressLog.findOne({
        customId: interaction.customId,
      })

      // If it doesn't exist, then create it
      if (!buttonPressLog) {
        buttonPressLog = new ButtonPressLog({ customId: interaction.customId })
      }

      // Update the button press log
      buttonPressLog.pressCount += 1

      // Save the changes on the database
      await buttonPressLog.save()

      await interaction.reply({
        content: `Button was clicked ${buttonPressLog.pressCount} time(s)!`,
        ephemeral: true,
      })
    } catch (error) {
      console.error('Error al ejecutar el botón:', error)
    }
  },
}
