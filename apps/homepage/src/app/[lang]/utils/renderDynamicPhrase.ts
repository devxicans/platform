type KeyWordProps = {
  phrase: string;
  keyWords: string[];
  keyDescriptions: string[];
}

export function renderDynamicPhrase({ phrase, keyWords, keyDescriptions }: KeyWordProps) {
  let currentKeyWordIndex = 0;
  let currentKeyPhraseIndex = 0;

  const getPhrase = () => {
    let dynamicPhrase = phrase
      .replace('{keyWords}', keyWords[currentKeyWordIndex])
      .replace('{keyDescriptions}', keyDescriptions[currentKeyPhraseIndex]);

    return dynamicPhrase;
  }

  const next = () => {
    currentKeyWordIndex = (currentKeyWordIndex + 1) % keyWords.length;
    currentKeyPhraseIndex = (currentKeyPhraseIndex + 1) % keyDescriptions.length;
    return getPhrase()
  }

  return {
    getPhrase,
    next
  }
}