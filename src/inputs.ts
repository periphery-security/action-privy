import * as core from '@actions/core'
import figlet from 'figlet'

export class Inputs {
  token: string
  trivyResults: string
  template: string | undefined
  dryRun: boolean

  constructor() {
    this.token = core.getInput('token', { required: true })
    this.trivyResults = core.getInput('trivy-results', { required: true })
    this.template = core.getInput('template')
    this.dryRun = core.getInput('dry-run').toLowerCase() === 'true' || false // Initialize dryRun
    figlet.text(
      'PRivy',
      function (err, data) {
        console.log(data)
        console.log('by Periphery')
      }
    )
  }
}
