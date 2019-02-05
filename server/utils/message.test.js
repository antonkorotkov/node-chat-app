const expect = require('expect')

const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'From'
    var text = 'Text'
    var message = generateMessage(from, text)
    expect(message).toInclude({from, text})
    expect(typeof message.createdAt).toBe('number')
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'From'
    var latitude = 50
    var longitude = 36

    var message = generateLocationMessage(from, latitude, longitude)
    expect(message).toInclude({from, url: `https://www.google.com/maps?q=${latitude},${longitude}`})
    expect(typeof message.createdAt).toBe('number')
  })
})
