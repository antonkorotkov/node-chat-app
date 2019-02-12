const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users()
    users.users = [
      {
        id: '1', name: 'Evil', room: '409'
      },
      {
        id: '2', name: 'Anton', room: '408'
      },
      {
        id: '3', name: 'Den', room: '409'
      }
    ]
  })

  it('should add new user', () => {
    var users = new Users
    var user = {
      id: '123', name: 'Evil', room: '409'
    }
    var resUser = users.addUser(user.id, user.name, user.room)
    expect(users.users).toEqual([user])
  })

  it('should remove a user', () => {
    var removed = users.removeUser('2')

    expect(users.users.length).toBe(2)
  })

  it('should not remove user', () => {
    var removed = users.removeUser('5')

    expect(removed).toNotExist()
    expect(users.users.length).toBe(3)
  })

  it('should find user', () => {
    var user = users.getUser('2')

    expect(user).toEqual({
      id: '2', name: 'Anton', room: '408'
    })
  })

  it('should not find a user', () => {
    var user = users.getUser('5')

    expect(user).toBeFalsy()
  })

  it('should return names for 409', () => {
    var userList = users.getUserList('409')

    expect(userList).toEqual(['Evil', 'Den'])
  })

  it('should return names for 408', () => {
    var userList = users.getUserList('408')

    expect(userList).toEqual(['Anton'])
  })
})
