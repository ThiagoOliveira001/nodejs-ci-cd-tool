module.exports = (req, res, next) => {
  res.ok = (content, messages) => {
    return res.status(200).json({ content, messages });
  };

  res.created = (content, messages) => {
    return res.status(201).json({ content, messages });
  };

  res.badRequest = (content, messages) => {
    return res.status(400).json({ content, messages });
  };

  res.internalError = (content, messages) => {
    return res.status(500).json({ content, messages });
  };

  res.notFound = (content, messages) => {
    return res.status(404).json({ content, messages });
  };

  res.unauthorized = (content, messages) => {
    return res.status(401).json({ content, messages });
  };

  next();
};
