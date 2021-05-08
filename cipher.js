const encode = (text, shift) => {
    let out = '';
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            if (shift >= 26 || shift < -26) {
                shift = shift % 26
            } else shift = shift

            if (shift >= 0) {
                code = code + +shift
                if (code > 122) {
                    code = code - 122 + 96
                }
            }
            if (shift < 0) {
                code = code + +shift
                if (code < 97) {
                    code = code + 122 - 96
                }
            }
            out += String.fromCharCode(code);
        } else if (code >= 65 && code <= 90) {
            if (shift >= 26 || shift < -26) {
                shift = shift % 26
            } else shift = shift

            if (shift >= 0) {
                code = code + +shift
                if (code > 90) {
                    code = code - 90 + 64
                }
            }
            if (shift < 0) {
                code = code + +shift
                if (code < 65) {
                    code = code + 90 - 64
                }
            }
            out += String.fromCharCode(code);

        } else out += String.fromCharCode(code);
    }
    return out;
};

const decode = (text, shift) => {
    let out = '';
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            if (shift >= 26 || shift < -26) {
                shift = shift % 26
            } else shift = shift

            if (shift >= 0) {
                code = code + -shift
                if (code < 97) {
                    code = code + 122 - 96
                }
            }
            if (shift < 0) {
                code = code + -shift
                if (code > 122) {
                    code = code - 122 + 96
                }
            }
            out += String.fromCharCode(code);
        } else if (code >= 65 && code <= 90) {
            if (shift >= 26 || shift < -26) {
                shift = shift % 26
            } else shift = shift
            if (shift >= 0) {
                code = code + -shift
                if (code < 65) {
                    code = code + 90 - 64
                }
            }
            if (shift < 0) {
                code = code + -shift
                if (code > 90) {
                    code = code - 90 + 64
                }
            }
            out += String.fromCharCode(code);

        } else out += String.fromCharCode(code);
    }
    return out;
};

module.exports = {
    encode,
    decode
};