const { Users, RefreshTokens } = require("../../models");

module.exports = async (req, res) => {
  const userId = req.body.userId;
  const user = await Users.findByPk(userId);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found"
    });
  }

  await RefreshTokens.destroy({
    where: { userId: userId }
  });

  return res.json({
    status: "success",
    message: "refresh token deleted"
  });
};
