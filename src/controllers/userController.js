const db = require('../utils/db');
const User = require('../models/user');

db.on('open', () => {});

class UserController {
  constructor() {
    this.createUser = this.createUser.bind(this);
    this.findUser = this.findUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async createUser(name, email, password) {
    const user = new User({
      name, email, password,
    });
    const savedUser = await user.save();
    return savedUser;
  }

  async findUser(id) {
    const user = await User.findById(id);
    return user;
  }

  async updateUser(id, name, email, password) {
    const user = await User.findById(id);
    user.name = name;
    user.email = email;
    user.password = password;
    const savedUser = await user.save();
    return savedUser;
  }

  async deleteUser(id) {
    const user = await User.findById(id);
    await user.remove();
  }
}

module.exports = UserController;
