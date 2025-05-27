import {StatusCodes} from 'http-status-codes';

import channelRepository from '../repositories/channelRepository';
import messageRepository from '../repositories/messageRepository';
import ClientError from '../utils/errors/clientError';
import { isUserMemberOfWorkspace } from './workspaceService';

export const getMessageService = async (messageParams,user,page:number,limit:number) => {
    const channelDetails = await channelRepository.getChannelWithWorkspaceDetails(
        messageParams.channelId,
    );

    const workspace =channelDetails.workspaceId;

    const isMember = isUserMemberOfWorkspace(workspace,user);

    if(!isMember){
        throw new ClientError({
            explanation: 'User is not a member of the workspace',
            message: 'User is not a member of the workspace',
            statusCode: StatusCodes.UNAUTHORIZED
        });
    }

    const messages = await messageRepository.getPaginatedMessages(
        messageParams.channelId,
        page,
        limit
    );
    return messages;
};

export const createMessageService = async (message:string) => {
    const newMessage = await messageRepository.createMessage(message);

    const messageDetails = await messageRepository.getMessageDetails(
        newMessage._id
    );
    return messageDetails;
}