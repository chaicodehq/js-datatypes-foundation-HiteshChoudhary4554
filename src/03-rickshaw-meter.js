/**
 * 🛺 Auto Rickshaw Fare Calculator - Number & Math
 *
 * Bhaiyya ji ka auto rickshaw hai. Meter se fare calculate hota hai.
 * Different math operations chahiye — round karna, min/max nikalna,
 * strings se numbers parse karna. Tu Bhaiyya ji ka meter software bana!
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 *   Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 *   1. parseFare(fareString)
 *      - Customer bolte hain "152.50" as string — parseFloat() se number banao
 *      - Agar result NaN hai ya fareString string nahi hai, return -1
 *      - Example: parseFare("152.50") => 152.5
 *      - Example: parseFare("abc") => -1
 *
 *   2. roundFare(amount, decimalPlaces)
 *      - .toFixed(decimalPlaces) se fare round karo
 *      - Result STRING return hota hai (toFixed returns string)
 *      - Agar amount number nahi hai ya decimalPlaces non-negative integer nahi hai, return ""
 *      - Example: roundFare(152.567, 2) => "152.57"
 *      - Example: roundFare(152.567, 0) => "153"
 *
 *   3. calculateSurge(baseFare, surgeMultiplier)
 *      - baseFare * surgeMultiplier karo
 *      - Math.ceil() se always round UP (auto wale ko paisa milna chahiye!)
 *      - Agar baseFare ya surgeMultiplier positive number nahi hai, return 0
 *      - Example: calculateSurge(100, 1.5) => 150
 *      - Example: calculateSurge(73, 1.8) => 132 (Math.ceil(131.4))
 *
 *   4. findCheapestAndCostliest(...fares)
 *      - Rest parameter (...) se variable number of fares le
 *      - Math.min() aur Math.max() se cheapest aur costliest dhundho
 *      - Non-number values filter out karo
 *      - Agar koi valid number nahi mila, return null
 *      - Return: { cheapest, costliest }
 *      - Example: findCheapestAndCostliest(150, 80, 200) => { cheapest: 80, costliest: 200 }
 *
 *   5. getDistanceDifference(from, to)
 *      - parseInt() se string km markers ko numbers mein convert karo
 *      - Math.abs() se absolute difference nikalo (direction matter nahi karta)
 *      - Agar parse ke baad koi NaN hai, return -1
 *      - Example: getDistanceDifference(5, 12) => 7
 *      - Example: getDistanceDifference("15", "8") => 7
 *
 * @example
 *   parseFare("152.50")                    // => 152.5
 *   roundFare(152.567, 2)                  // => "152.57"
 *   findCheapestAndCostliest(150, 80, 200) // => { cheapest: 80, costliest: 200 }
 */
export function parseFare(fareString) {
  if (isNaN(fareString) || typeof fareString != "string" || fareString === "") {
    return -1;
  }
  let parseFare = parseFloat(fareString);
  if (parseFare === NaN) {
    return -1;
  }
  return parseFare;
}

export function roundFare(amount, decimalPlaces) {
  if (!Number.isInteger(decimalPlaces)) {
    return ""
  }

  if (Number(decimalPlaces) != decimalPlaces || decimalPlaces < 0) {
    return "";
  }
  if (isNaN(amount)) {
    return ""
  }

  return amount.toFixed(decimalPlaces);
}

export function calculateSurge(baseFare, surgeMultiplier) {

  if (Number(baseFare) !== baseFare || Number(surgeMultiplier) !== surgeMultiplier) {
    return 0
  }

  if (baseFare < 0 || surgeMultiplier < 0) {
    return 0;
  }

  let total = baseFare * surgeMultiplier;
  return Math.ceil(total);
}

export function findCheapestAndCostliest(...fares) {

  const validNumbers = fares.filter(
    v => typeof v === "number" && !Number.isNaN(v)
  );

  if (validNumbers.length === 0) {
    return null;
  }

  const cheapest = Math.min(...validNumbers);
  const costliest = Math.max(...validNumbers);

  return {
    cheapest,
    costliest
  };
}

export function getDistanceDifference(from, to) {
  let fromDes = parseInt(from);
  let toDes = parseInt(to);

  if (isNaN(fromDes) || isNaN(toDes)) {
    return -1
  }

  let dest = Math.abs(from - to);
  return dest
}
