const sendSuccessResponse = ({ res, data = {}, message, statusCode }) => {
  if (message) {
    data.message = message;
  }

  return res.status(statusCode).json(data);
};

const sendFailureResponse = ({
  res,
  message,
  statusCode = 500,
  errors = [],
}) => {
  const response = {
    error: errors.length ? errors : { message },
  };

  return res.status(statusCode).json(response);
};

const response = ({ message, statusCode, errors, name, value, res, data }) => {
  if (statusCode >= 400) {
    sendFailureResponse({ res, message, statusCode, errors });
  } else {
    sendSuccessResponse({
      res,
      data: { data: data ? data : { [name]: value } },
      message,
      statusCode,
    });
  }
};

module.exports = {
  response,
  sendFailureResponse,
  sendSuccessResponse,
};
