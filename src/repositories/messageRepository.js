import Message from '../schema/message.js';
import crudRepository from './crudRepository.js';

const messageRepository = {
    ...crudRepository(Message),
    getMessagesByChannel: async function (channelId) {
        const messages = await Message.find({ channelId }).sort({ createdAt: -1 });
        return messages;
    }
};

export default messageRepository;