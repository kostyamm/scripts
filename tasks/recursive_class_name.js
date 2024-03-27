const CLASS_NAMES = {
    header: [
        'baseBg',
        {
            fontSize: 12,
            color: 'red'
        }
    ],
    content: [
        'baseText',
        'baseBg',
        {
            fontSize: 14
        }
    ],
    animation: 'baseAnimation',
    baseAnimation: {
        transition: 'all 1s ease-out'
    },
    baseText: {
        fontSize: 12,
        color: 'yellow'
    },
    baseBg: {
        background: 'black'
    }
}

const recursive_class_name = (styles, className) => {
    const currentStyle = styles[className]

    if (typeof currentStyle === 'string') {
        return recursive_class_name(styles, currentStyle)
    }

    if (!Array.isArray(currentStyle)) {
        return currentStyle
    }

    return currentStyle.reduce((res, acc) => {
        if (typeof acc === 'string') {
            return { ...res, ...recursive_class_name(styles, acc) }
        }

        return { ...res, ...acc }
    }, {})
}

console.log('content:', recursive_class_name(CLASS_NAMES, 'content'))
console.log('animation:', recursive_class_name(CLASS_NAMES, 'animation'))