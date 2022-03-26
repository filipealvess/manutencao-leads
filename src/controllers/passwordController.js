function countRulesAmount(rules) {
  let total = 0;
  let fulfilledAmount = 0;

  for (const property in rules) {
    total++;
    fulfilledAmount += rules[property] ? 1 : 0;
  }

  return { total, fulfilledAmount };
}

export function isNotEmpty(pass) {
  return pass.trim().length > 0;
}

export function halfWasFulfilled(rulesStatus) {
  const { total, fulfilledAmount } = countRulesAmount(rulesStatus);
  const half = Math.floor(total / 2);

  return fulfilledAmount >= half;
}

export function isHard(rulesStatus) {
  const { total, fulfilledAmount } = countRulesAmount(rulesStatus);

  return total === fulfilledAmount;
}
