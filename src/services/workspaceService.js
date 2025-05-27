import { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';

import { addEmailtoMailQueue } from '../producers/mailQueueProducer.js';
import channelRepository from '../repositories/channelRepostiory.js';
import userRepository from '../repositories/userRepository.js';
import workspaceRepository from '../repositories/workspaceRepository.js';
import { workspaceJoinMail } from '../utils/common/mailObject.js';
import ClientError from '../utils/errors/clientError.js';
import ValidationError from '../utils/errors/validationError.js';

const isUserAdminOfWorkspace = (workspaceId:string,userId:string) => {
    const response = workspace.members.find(
        (member) => 
            (member.memberId.toString() === userId || member.memberId._id.toString() === userId) && member.role === "admin"
    );
    return response;
}

export const isUserMemberOfWorkspace = (workspaceId:string,userId:string) => {
    const response = workspace.members.find((member) => {
        return member.memberId._id.toString() ===userId;
    })
}

