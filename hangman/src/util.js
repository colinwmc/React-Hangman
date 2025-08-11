import { languages } from "./languages";
import { words } from "./words";

export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

export const statuses = [
    { top: '', bottom: '', style: { backgroundColor: 'transparent' } },
    { top: getFarewellText(languages[0].name), bottom: '', style: { backgroundColor: '#7A5EA7', fontStyle: 'italic' } },
    { top: getFarewellText(languages[1].name), bottom: '', style: { backgroundColor: '#7A5EA7', fontStyle: 'italic' } },
    { top: getFarewellText(languages[2].name), bottom: '', style: { backgroundColor: '#7A5EA7', fontStyle: 'italic' } },
    { top: getFarewellText(languages[3].name), bottom: '', style: { backgroundColor: '#7A5EA7', fontStyle: 'italic' } },
    { top: getFarewellText(languages[4].name), bottom: '', style: { backgroundColor: '#7A5EA7', fontStyle: 'italic' } },
    { top: getFarewellText(languages[5].name), bottom: '', style: { backgroundColor: '#7A5EA7', fontStyle: 'italic' } },
    { top: getFarewellText(languages[6].name), bottom: '', style: { backgroundColor: '#7A5EA7', fontStyle: 'italic' } },
    { top: 'Game Over!', bottom: 'You lose! Better start learning Assembly 😭', style: { backgroundColor: '#BA2A2A' } },
    { top: 'You Win!', bottom: 'Well done! 🎉', style: { backgroundColor: '#10A95B' } }
];

export function pickWord(){
    return words[Math.floor(Math.random()*(words.length - 1))]
}