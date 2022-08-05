const { Users, RefreshTokens } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const userId = req.body.userId;
  const refreshToken = req.body.refreshToken;

  const schema = {
    refreshToken: "string",
    userId: "number"
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "fail",
      message: validate
    });
  }

  const user = await Users.findByPk(userId);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found"
    });
  }

  const createdRefreshToken = await RefreshTokens.create({
    token: refreshToken,
    userId: userId
  });

  return res.json({
    status: "success",
    data: {
      id: createdRefreshToken.id
    }
  });
};
