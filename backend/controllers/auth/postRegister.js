const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    const userExists = await User.exists({ mail: mail.toLowerCase() });

    if (userExists) {
      res.status(409).send('Email already in use');
    }

    // 비밀번호 암호화
    const encryptedPassword = await bcrypt.hash(password, 10);

    // document를 database에 저장
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });

    // jwt 토큰을 생성
    const token = 'JWT Token';

    return res.status(201).json({
      userDetails: {
        mail: user.mail,
        user: user.username,
        token,
      },
    });
  } catch (error) {
    return res.status(500).send('Error occured. Please Try Again ');
  }
};

module.exports = postRegister;
