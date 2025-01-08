import { renderDynamicPhrase } from "../../../../src/pages/home/components/renderDynamicPhrase";

describe('renderDynamicPhrase', () => {
  const phrase = "We {keyWords} the future while being {keyDescriptions}";
  const keyWords = ["{engineer}", "{create}", "{code}"];
  const keyDescriptions = ["{humans}", "{developers}", "{artists}"];

  it('should return the initial phrase correctly', () => {
    const { getPhrase } = renderDynamicPhrase({ phrase, keyWords, keyDescriptions });
    const result = getPhrase();
    expect(result).toBe("We {engineer} the future while being {humans}");
  });

  it('should return the next phrase in the sequence', () => {
    const { next } = renderDynamicPhrase({ phrase, keyWords, keyDescriptions });

    let result = next();

    expect(result).toBe("We {create} the future while being {developers}");

    result = next();

    expect(result).toBe("We {code} the future while being {artists}");

    result = next();

    expect(result).toBe("We {engineer} the future while being {humans}");
  });

  it('should split the phrase correctly into static and dynamic parts', () => {
    const { splitPhrase } = renderDynamicPhrase({ phrase, keyWords, keyDescriptions });

    const parts = splitPhrase("We {engineer} the future while being {humans}");

    expect(parts).toEqual([
      { content: "We", isDynamic: false, key: 0 },
      { content: "{engineer}", isDynamic: true, key: 1 },
      { content: "the", isDynamic: false, key: 2 },
      { content: "future", isDynamic: false, key: 3 },
      { content: "while", isDynamic: false, key: 4 },
      { content: "being", isDynamic: false, key: 5 },
      { content: "{humans}", isDynamic: true, key: 6 },
    ]);
  });
});
