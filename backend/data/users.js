import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admins@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Colson Baker',
    email: 'colson@baker.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Marshall Mathers',
    email: 'marshall@mathers.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users
