import length2 from "../data/appendixD/alphabetizedByLength/2.json";
import length3 from "../data/appendixD/alphabetizedByLength/3.json";
import length4 from "../data/appendixD/alphabetizedByLength/4.json";
import length5 from "../data/appendixD/alphabetizedByLength/5.json";
import length6 from "../data/appendixD/alphabetizedByLength/6.json";
import reverse6 from "../data/appendixD/reverseAlphabetizedByLength/6.json";
export * as wordPatterns from "../data/appendixD/wordPattern/wordPatterns.json";

export const alphabetizedByLength = {
  2: length2,
  3: length3,
  4: length4,
  5: length5,
  6: length6,
};

export const reverseAlphabetizedByLength = {
  6: reverse6,
};
