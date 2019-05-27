import * as express from 'express'
import * as parser from 'body-parser'
import * as path from 'path'

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.initializeApp()
  }

  private initializeApp (): void {
    this.app.use(parser.json())
    this.app.use(parser.urlencoded({ extended:true }))
    this.app.use(express.static(path.resolve(__dirname, '../public')))
  }
}

export const app = new App().app

