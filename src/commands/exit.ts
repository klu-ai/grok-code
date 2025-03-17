import { Command } from '../commands'

const exit = {
  type: 'local',
  name: 'exit',
  description: 'Exit the application',
  isEnabled: true,
  isHidden: false,
  async call() {
    process.exit(0)
    return '' // Note: This won't be reached due to process.exit()
  },
  userFacingName() {
    return 'exit'
  },
} satisfies Command

export default exit 