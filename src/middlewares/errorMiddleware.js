const errorMiddleware = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status)
      .json({ message: error.message });
  }
  return res.status(500).json({ message: `Algo deu errado! Mensagem: ${error.message}` });
};

module.exports = {
  errorMiddleware,
};