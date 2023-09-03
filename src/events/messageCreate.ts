import { Message } from 'discord.js'

export function respond(message: Message) {
  const { content } = message
  console.log(content)
}