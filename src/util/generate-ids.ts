import randomstring from 'randomstring'

export function generateRandomString(length: number, charset: string) {
    return randomstring.generate({
        length: length,
        charset: charset
    })
}