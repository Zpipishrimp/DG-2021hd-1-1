var allShareCodes = [];
var removedShareCodes = [];

exports.setDefaultShareCodes = function(shareCodes) {
    if (shareCodes && shareCodes.length) {
        for (var shareCode of shareCodes) {
            allShareCodes.push(shareCode)
        }
    }
}

exports.addShareCode = function(shareCode) {
    if (allShareCodes.indexOf(shareCode) == -1) {
        allShareCodes.push(shareCode)
    }
}

exports.removeShareCode = function(shareCode) {
    removedShareCodes.push(shareCode)
}

exports.forEachShareCode = function(func) {
    for (var shareCode of allShareCodes) {
        if (removedShareCodes.indexOf(shareCode) == -1) {
            if (func(shareCode)) {
                break
            }
        }
    }
}

exports.getShareCodes = function() {
    var shareCodes = []
    for (var shareCode of allShareCodes) {
        if (removedShareCodes.indexOf(shareCode) == -1) {
            shareCodes.push(shareCode)
        }
    }
    return shareCodes
}