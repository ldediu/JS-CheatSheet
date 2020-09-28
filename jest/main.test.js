const fn = require('./main.js')

describe('removeCharX function', () => {
    it('should remove the first character', () => {
        const str = "We're in the endgame now."
        const result = fn.removeCharX(str, 0)
        expect(result).toEqual("e're in the endgame now.")
    })
    it('return the original string', () => {
        const str = "a"
        const result = fn.removeCharX(str, 3)
        expect(result).toEqual("a")
    })
    it('return the original string', () => {
        const str = "abc"
        const result = fn.removeCharX(str, -3)
        expect(result).toEqual("abc")
    })
})

describe('less3Diff function', () => {
    it('should return false on strings with >= 3 letters different', () => {
        const result = fn.less3Diff('spiderman', 'mary jane')
        expect(result).toEqual(false)
    })
    it('should return true if < 3 letters different', () => {
        const result = fn.less3Diff('spiderman', 'spyderman')
        expect(result).toEqual(true)
    })
    it('should always return true on strings < 3 characters', () => {
        const result = fn.less3Diff("jk", "lm")
        expect(result).toEqual(true)
    })
})

describe('reverso function', () => {
    it('should reverse "sneakers"', () => {
        const result = fn.reverso('sneakers')
        expect(result).toEqual('srekaens')
    })
    it('should reverse strings of one letter', () => {
        const result = fn.reverso('s')
        expect(result).toEqual('s')
    })
    it('should return an empty string when given an empty string', () => {
        const result = fn.reverso("")
        expect(result).toEqual("")
    })
})