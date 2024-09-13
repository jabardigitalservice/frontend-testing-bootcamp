import { expect, it, describe } from 'vitest'
import { getReadableFileSize, toCamelCase, capitalizeText } from './index'

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
