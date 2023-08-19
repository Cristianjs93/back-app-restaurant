class ErrorHandler {
  constructor(private exception: any) {
    if (typeof exception === 'string') throw exception;
    if (exception instanceof Error) throw exception.message;

    throw new Error('Ha ocurrido un error');
  }
}

export default {
  ErrorHandler,
};
