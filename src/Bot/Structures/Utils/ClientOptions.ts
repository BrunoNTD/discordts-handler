import { ActivityType, ClientOptions, GatewayIntentBits, Options } from 'discord.js';

export const clientOptions: ClientOptions = {
	intents: [GatewayIntentBits.Guilds],
	presence: {
		status: 'dnd',
		activities: [
			{
				name: '🤩 Default Store',
				type: ActivityType.Playing,
			},
		],
	},
	makeCache: Options.cacheEverything(),
};
