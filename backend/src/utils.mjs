export function sanitize(input) {
    return input.replace(/[&<>"'\/]/g, function(char) {
        const charMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;'
        };
        return charMap[char] || char;
    });
}

export function sanitizeObject(obj) {
    const sanitizedObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            sanitizedObj[key] = sanitize(obj[key]);
        }
    }

    return sanitizedObj;
}