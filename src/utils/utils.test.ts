import CapitalizeFirstLetter from "./utils"

describe('CapitalizeFirstLetter', ()=>{
    it('should convert string with first letter capital', ()=>{
        const input = 'ABC'
        const output = CapitalizeFirstLetter(input)
        expect(output).toBe('Abc')
    })
})