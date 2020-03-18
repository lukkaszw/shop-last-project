const adminAuth = (req, res, next) => {
  // I'm going to add administration panel in future. Now to avoid making new products by users!

  if(!req.user || req.user.role !== 'admin') {
    res.status(401).json({
      error: 'Unauthorized content!',
    });
    return;
  }
  next();
}


module.exports = adminAuth;