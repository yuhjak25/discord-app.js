const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with "Pong!"'),
  async execute(interaction) {
    try {
      const button = new ButtonBuilder()
        .setCustomId('ping-button')
        .setLabel('Click me!')
        .setStyle(ButtonStyle.Primary)

      const row = new ActionRowBuilder().addComponents(button)

      await interaction.reply({
        content: 'Pong!',
        ephemeral: true,
        components: [row],
      })
    } catch (error) {
      console.error('Error al ejecutar el comando ping:', error)
    }
  },
}
