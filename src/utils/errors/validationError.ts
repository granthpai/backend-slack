import {StatusCodes} from 'http-status-codes';

class ValidationError extends Error{
    constructor(errorDetails:Error,message:string){
        super(message);
        this.name = 'ValidationError';
        let explanation = [];
        Object.keys(errorDetails.error).forEach((key) => {
            explanation.push(errorDetails.error[key]);
        })
        this.message = errorDetails.message;
        this.statusCode = errorDetails.statusCode;
           ? error.statusCode
           : StatusCodes.BAD_REQUEST;
    }
}

export default ValidationError; 