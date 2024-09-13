import { expect, it, describe } from 'vitest'
import { getReadableFileSize, toCamelCase, capitalizeText, validateEmail } from './index'

describe('[utils: getReadableFileSize]', () => {
    it('should return the size of the file with unit size', () => {
        expect(getReadableFileSize(1024)).toBe('1.0 KB')
    })
})

describe('[utils: toCamelCase]', () => {
    it('should return string with camelCased format', () => {
        expect(toCamelCase('hello-warudo')).toBe('helloWarudo')
    })
})

describe('[utils: capitalizeText]', () => {
    it('should return string with capitalize every first char of word', () => {
        expect(capitalizeText('Halo teman-teman frontend')).toBe('Halo Teman-teman Frontend')
    })
})

describe('[utils: validateEmail]', () => {
    it('should return "Valid Email"', () => {
        expect(validateEmail('agung@example.com')).toBe('Valid email')
    })

    it('should return "Invalid Email"', () => {
        expect(validateEmail('Waduh waduh waduh')).toBe('Invalid email')
    })
})
