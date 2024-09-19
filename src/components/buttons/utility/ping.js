module.exports = {
  data: {
    customId: 'ping-button',
  },
  async execute(interaction) {
    try {
      await interaction.reply({
        content: 'Button was clicked!',
        ephemeral: true,
      })
    } catch (error) {
      console.error('Error al ejecutar el botón:', error)
    }
  },
}
