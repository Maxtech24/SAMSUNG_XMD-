var spin = require('spinnies');

var spinner = {
    "interval": 120,
    "frames": [
        "",
        "[SHADØW-XMD-V1]-IS-ACTIVE🎭",
        "[SHADØW-XMD-V1]-IS-ACTIVE🎭.",
        "[SHADØW-XMD-V1]-IS-ACTIVE🎭 . .",
        "[SHADØW-XMD-V1]-IS-ACTIVE🎭 . . .",
        "[SHADØW-XMD-V1]-IS-ACTIVE🎭 . . . .",
        "[SHADØW-XMD-V1]-IS-ACTIVE🎭 . . . . .",
        "[ACTIVATING]-MESSAGES🐉",
        "[ACTIVATING]-MESSAGES🐉.",
        "[ACTIVATING]-MESSAGES🐉. .",
        "[ACTIVATING]-MESSAGES🐉. . .",
        "[ACTIVATING]-MESSAGES🐉. . . .",
        "[ACTIVATING]-MESSAGES🐉. . . . .",
        ""
    ]
};

let globalSpinner;

var getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins });
    return globalSpinner;
};

let spins = getGlobalSpinner(false);

module.exports.start = (id, text) => {
    spins.add(id, { text: text });
};
