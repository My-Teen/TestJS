let tree = {
    left: {
        left: "Первое предложение из произвольной строки",
        right: {
            left: "Другое произвольное предложение",
            right: "Еще одно следующее предложение, но не очень длинное"
        }
    },
    right: {
        left: {
            left: {
                left: "Еще одно не очень длинное предложение",
                right: ""
            },
            right: {
                left: "",
                right: "Еще одно не очень длинное предложение"
            }
        },
        right: {
            left: {
                left: "Предложение",
                right: "Еще одно следующее предложение, но не очень длинное"
            },
            right: {
                left: "Другое произвольное предложение",
                right: {
                    left: "Два слова",
                    right: "Еще одно следующее предложение, но не очень длинное"
                }
            }
        }
    }
};

threeword(tree);

function threeword(obj, way) {
    if (isNode(obj)) {
        if (typeof way == 'undefined')
            way = ''
        if (way != '')
            way = way + '->';

        threeword(obj.left, way + 'Left');
        threeword(obj.right, way + 'Right');
    } else if (isList(obj)) {
        console.log(way + ': ' + findLongWords(obj, 3))
    }
    return null;
}

function isList(obj) {
    if (typeof (obj) == "string")
        return true;
    else
        return false;
}

function isNode(obj) {
    if (typeof (obj) == "string")
        return false;
    else
        return true;
}


function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
}

function findLongWords(str, word_count) {

    str = str.replace(/[.,!?;|<>]+/g, '');

    let words = str.split(' ');
    let result = '';
    for (let i = 1; i <= word_count; i++) {
        if ((words.length === 0) || ((words.length === 1) && (words[0] === '')))
            continue;

        let theLongestWord = words.reduce(longer);
        result = result + theLongestWord + ' ';

        let word = words.indexOf(theLongestWord);
        if (word != -1) {
            words.splice(word, 1);
        }
    }
    return result;
}