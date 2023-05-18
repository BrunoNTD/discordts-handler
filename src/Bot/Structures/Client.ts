import { Client } from 'discord.js';
import { clientOptions } from './Utils/ClientOptions';
import { Logger } from '../../Utils/Logger';
import * as chalk from 'chalk';
import { Database } from '../../Data/Database/Prisma';

export class OurBot extends Client {
    public logger = new Logger ({ prefix: 'BOT' });
	public db = new Database ();
	constructor() {
		super(clientOptions);
		this.init();
	}

	private async init() {
		await this.login(process.env.TOKEN)
			.then(() => {
				this.logger.success(`Logged in as ${chalk.reset.white.bold(this.user!.username)}${chalk.gray('#')}${chalk.reset.gray.bold(this.user!.discriminator)}!`);
			})
			.catch((e) => {
				this.logger.error(e);
			});
	}
}
