/**
 * 🏪 Kiryana Store Bill - Array Transform
 *
 * Gupta ji ki kiryana (grocery) store hai. Monthly hisaab kitaab karna hai —
 * items ka total nikalna, sorting karna, bill format karna.
 * Array transform methods se Gupta ji ki dukaan digital banao!
 *
 * Data format: items = [
 *   { name: "Atta", price: 40, qty: 2 },
 *   { name: "Daal", price: 80, qty: 1 },
 *   ...
 * ]
 *
 * Methods to explore: .map(), .filter(), .reduce(), .sort(), .join()
 *
 * Functions:
 *
 *   1. getItemNames(items)
 *      - .map() se sirf names nikalo
 *      - Agar items array nahi hai, return []
 *      - Example: getItemNames([{name:"Atta",price:40,qty:2}]) => ["Atta"]
 *
 *   2. getAffordableItems(items, maxPrice)
 *      - .filter() se items nikalo jinka price <= maxPrice
 *      - Agar items array nahi hai ya maxPrice number nahi hai, return []
 *      - Example: getAffordableItems([{name:"Atta",price:40},{name:"Ghee",price:500}], 100)
 *                 => [{name:"Atta",price:40}]
 *
 *   3. calculateTotal(items)
 *      - .reduce() se (price * qty) ka sum nikalo
 *      - Agar items array nahi hai ya empty hai, return 0
 *      - Example: calculateTotal([{name:"Atta",price:40,qty:2},{name:"Daal",price:80,qty:1}])
 *                 => 160
 *
 *   4. sortByPrice(items, ascending)
 *      - [...items].sort() se NEW sorted array return karo (original mat badlo!)
 *      - ascending = true => low to high, false => high to low
 *      - Agar items array nahi hai, return []
 *      - Example: sortByPrice([{name:"Ghee",price:500},{name:"Atta",price:40}], true)
 *                 => [{name:"Atta",price:40},{name:"Ghee",price:500}]
 *
 *   5. formatBill(items)
 *      - .map() se har item ko "name x qty = Rs.total" format karo
 *      - Phir .join("\n") se multi-line bill banao
 *      - Agar items array nahi hai ya empty hai, return ""
 *      - Example: formatBill([{name:"Atta",price:40,qty:2}]) => "Atta x 2 = Rs.80"
 *
 * @example
 *   getItemNames([{name:"Atta",...}])         // => ["Atta"]
 *   calculateTotal([{price:40,qty:2},...])    // => 160
 *   formatBill([{name:"Atta",price:40,qty:2}]) // => "Atta x 2 = Rs.80"
 */
export function getItemNames(items) {
  if (!Array.isArray(items)) {
    return []
  }
  const names = items.map((item) => item.name);
  return names;
}

export function getAffordableItems(items, maxPrice) {
  if (!Array.isArray(items) || isNaN(maxPrice)) {
    return []
  }

  const result = items.filter((item) => item.price <= maxPrice);
  return result
}

export function calculateTotal(items) {
  if (!Array.isArray(items) || items.length === 0 ) {
    return 0
  }

  const total = items.reduce((sum,item) => {
    const price = item.price*item.qty
    return sum + price;
  },0)
  return total
}

export function sortByPrice(items, ascending) {
  if (!Array.isArray(items)) {
    return []
  }
  
  if (ascending) {
    const newArr = [...items].sort((a,b) => a.price - b.price);
    return newArr;
  }
  else{
    const newArr = [...items].sort((a,b) => b.price - a.price);
    return newArr;
  }
  
}

export function formatBill(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return ""
    }

    const result = items.map((item) => {
      return `${item.name} x ${item.qty} = Rs.${item.price * item.qty}`
    })

    return result.join("\n")

}
