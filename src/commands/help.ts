import { ApplicationCommandOptionBase, ApplicationCommandType, Client, CommandInteraction, EmbedBuilder } from 'discord.js'
import { commands } from '../commands'

export default {
  name: 'help',
  description: 'get help from bot!',
  type: ApplicationCommandType.ChatInput,
  category: 'general',
  run: async (client: Client, interaction: CommandInteraction) => {
    const embed = new EmbedBuilder()
      .setTitle('Help')
      .setDescription('Browse through all available commands!')
      .setColor('#4865f2')

    for (const [key, value] of Object.entries(commands)) {
      embed.addFields({
        name: 'options' in value ? [value.name, ...value.options.map((x: ApplicationCommandOptionBase) => x.name)].join(' ') : key,
        value: value.description,
      })
    }

    interaction.reply({ embeds: [embed] })
  }
}