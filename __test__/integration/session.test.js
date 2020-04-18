const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should be sum numbers', async () => {
    const user = await User.create({
      name: "Vinicius",
      email: "vynnyprud@gmail.com",
      password_hash: "1234"
    });

    console.log(user)

    expect(user.email).toBe('vynnyprud@gmail.com.br');
  })
})