const escapeStringRegexp = require('escape-string-regexp')
const nlp = require('wink-nlp-utils')
const corpus = nlp.string.composeCorpus;

let indicators = [
    "[{time}] [abuse]",
    "[feel|felt|feeling|{time}] [abused]",
    "anguish",
    "[feel|felt|feeling] [anxious|ancious|anxcious|insecure]",
    "[feel|felt|feeling|{time}] [afraid]",
    "[feel|felt|{me}|{time}] [damaged|damage|dammage]",
    "[feel|felt|am|{me}|{you}] [depressed|depressed|deppressed]",
    "[depressed|depressed|deppressed] [{me}]",
    "[{me}|{you}] [am] [desprate|desperate|desparate]",
    "[feel|felt|{time}] [desprate|desperate|desparate]",
    "[feel|felt|feeling|i|growing|deep|utter|wave of|{me}|sometimes|in|{time}], [despare|dispare|despair|self-despair]",
    "[no one understands] [{me}|{you}]",
    "[leave] [{me}] [alone]",
    "[feel|felt|feeling|{time}] [alone|overwhelmed]",
    "[feel|felt|feeling|{time}] [abandonned|abandoned]",
    "[{me}|{time}] [abandonned|abandoned|overwhelmed]",
    "[abandonned|abandoned] [{me}|{time}]",
    "[abandon|adbandon|abondoning] [{me}|{time}]",
    "[{me}|{you}] [|am|are] [{worthless}]",
    "[{worthless}|{emotion}] [{me}|{time}]",
    "[trouble|troubled|unhappiness|anger|angry|frustrated|frustrating|mad|fuming|fury|irritated|violence|irritation|irate|outrage|resentful|rage|temper|blow up|blow-up|blowup|prick|endure|fatigued|fatiged|fatigue|defeated|insecure|isolated|struggle|uncertain|uncomfortable|uncomfortible|unfulfilled|unfulfiled|unsettling|unsettled|fed up|fed-up|fedup|stressed|too hard|tedious|weary] [{time}]",
    "[{time}] [trouble|troubled|unhappiness|anger|angry|frustrated|frustrating|mad|fuming|fury|irritated|violence|irate|irritation|outrage|resentful|rage|temper|blow up|blow-up|blowup|prick|endure|fatigued|fatiged|fatigue|defeated|insecure|isolated|struggle|uncertain|uncomfortable|uncomfortible|unfulfilled|unfulfiled|unsettling|unsettled|fed up|fedup|fed-up|stressed|too hard|stupid|tedious|uninterested|uninspired|uninteresting|weary]",
    "[feel|felt|feeling] [{emotion}] [{time}]",
    "[dangerous|angry] [temper]",
    "[{emotion}] [of] [his|her] [temper]",
    "[{me}|{time}] [{emotion}]",
    "[feel|felt] [{worthless}]",
    "[stab|kill|hurt|cut|harm|murder] [{me}|{you}]",
    "[{me}|you] [suffer]",
    "[inflict|cause|wish] [pain|painful]",
    "[{me}|{you}] [died]",
    "[{me}|{you}] [die]",
    "[die] [{me}|{you}]",
    "[would] [{you}|{me}] [miss] [{me}]",
    "good for nothing",
    "[am|{me}|{you}] [nothing]",
    "[{me}] [panicing|panicking]",
    "[panicing|panicking] [again]",
    "end it all",
    "end it now",
    "[end] [{me}] [life]",
    "[better off without] [{me}|{you}]",
    "want to die",
    "so lonely",
    "[after|when] [{me}] [gone]",
    "suicide",
    "[{me}] [can't] [cope]",
    "[{me}] [had enough]",
    "[{me}] [{time}] [stupid]",
    "[{me}] [an|a] [{time}] [idiot]",
    "[{me}] [{time}] [an|a] [idiot]",
    "what's the point",
    "[it's|its] [hard|difficult] [to] [cope]",
    "[is] [joyless]",
    "[joyless|{worthless}] [life]",
    "[self-harm|selfharm|self harm]",
    "[i] [need] [help]",
    "[{me}] [the|a] [victim]",
    "[victimise|victimize] [{me}]",
    "[{me}] [going|about] [to] [explode]",
    "[he is|she is|he's|she's|hes|shes] [out of control|out-of-control]",
    "[out of control|out-of-control] [{time}]",
    "[{me}] [like an|an|] [alien]",
    "[discriminate|descriminate|discrimminate|discrimination|descrimination|discrimminasion] [against] [{me}]",
    "[{me}] [have|having] [low] [esteem|estem|self-esteem|self-estem|self esteem|self estem|selfesteem|selfestem]",
    "[{me}] [lost|no] [motivation|pleasure|desire]",
    "[{me}] [feel] [{time}|] [numb|passionless|unmotivated|{emotion}|{worthless}]",
    "[{me}] [feel] [numb|passionless|unmotivated|{emotion}|{worthless}] [{time}|]",
    "[{me}] [feel|felt|feeling|] [unmotivated|uninterested|{emotion}|{worthless}]] [{time}]",
    "[{me}] [feel|felt|feeling|] [{time}|] [unmotivated|uninterested|{emotion}|{worthless}]]"
];

let me = [
    "i",
    "im",
    "i'm",
    "i am",
    "me",
    "my",
    "myself",
].join('|');

let you = [
    "you",
    "you're",
    "you are",
].join('|');

let time = [
    'constantly',
    "forever",
    "for ever",
    "all the time",
    "always",
    "complete",
    "completely"
].join('|');

let worthless = [
    "worthless",
    "no worth",
    "good for nothing",
    "depraved",
    "miserable",
    "helpless",
    "hopeless",
    "hopelessness",
    "hoplesness",
    "hoplessnes",
    "gloom",
    "gloomy",
    "grim",
    "fucked",
    "screwed"
].join('|');

let emotion = [
    "sad",
    "sadness",
    "not happy",
    "unhappy",
    "un-happy",
    "un happy",
    "alone",
    "grief",
    "greif",
    "grieving",
    "greivin",
    "griving",
    "fear",
    "fearful",
    "miserable",
    "scared",
    "sorrow",
    "joyless",
    "agony",
    "agonize",
    "agonise",
    "terrified",
    "blue",
    "dead",
    "empty",
    "angry",
    "low",
    "upset",
    "forlorn",
    "heartache",
    "heart ache",
    "heart-ache",
    "low spirits",
    "low-spirits",
    "lowspirits",
    "numb"
].join('|');

let readyForCorpi = indicators.map((term) => {
    return term.replace(/\{me\}/g, me)
        .replace(/\{you\}/g, you)
        .replace('{time}', time)
        .replace('{worthless}', worthless)
        .replace('{emotion}', emotion);
});

let words = [];

readyForCorpi.forEach((item) => {
    if (item.indexOf('[') >= 0) {
        words = words.concat(corpus(item));
    } else {
        words.push(item);
    }
});

words = words.map((word) => {
    return word.replace(/  /g, ' ').replace(/  /g, ' ').replace(/  /g, ' ')
});


// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        // console.log(word);
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords
