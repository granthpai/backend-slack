export const internalErrorResponse = (error:Error) => {
  return {
    success: false,
    message: 'Internal Server Error',
    data: {},
    error: error 
  };
};

export const customErrorResponse = (error:Error) => {
    if (!error.message && !error.explanation) {
      return internalErrorResponse(error);
    }
    return {
      success: false,
      err: error.explanation,
      data: {},
      message: error.message
    };
};
  
export const successResponse = <T=any>(data:T, message:string) => {
    return {
      success: true,
      message,
      data,
      err: {}
    };
};
