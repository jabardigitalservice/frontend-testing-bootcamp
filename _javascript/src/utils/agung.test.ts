import { expect, it, describe } from 'vitest'
import { getReadableFileSize } from './index'


describe('[utils: getReadableFileSize]', () => {
    it('should return the size of the file with unit size', () => {
        expect(getReadableFileSize(2048)).toBe('2.0 KB')
    })
})
