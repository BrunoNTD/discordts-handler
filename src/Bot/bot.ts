import { OurBot } from './Structures/Client';

export const botInit = () => {
	const client = new OurBot();
	return client;
};