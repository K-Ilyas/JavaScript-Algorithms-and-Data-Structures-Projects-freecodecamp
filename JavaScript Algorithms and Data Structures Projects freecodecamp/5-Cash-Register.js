/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
*/

function checkCashRegister(price, cash, cid) {
    let change = [];
    let pay = cash - price;
    let result = {
        cid: 0,
        cash: 0
    };
    let final_result = {
        status: "",
        change: []
    };
    const CURRENCY_UNIT = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100,
    }
    function reverseArray(arr) {
        if (arr.length === 0) {
            return []
        }
        return [[...arr.pop()]].concat(reverseArray(arr))
    }
    let newTable = [...cid];
    newTable = reverseArray(newTable);
    change = newTable.reduce((result, e, i) => {
        let money = 0;
        let shoudHave = 0;
        if (Array.isArray(e) && pay > 0) {
            if (CURRENCY_UNIT[e[0]] <= pay) {
                money = Number((pay % CURRENCY_UNIT[e[0]]).toFixed(2));
                shoudHave = e[1] >= pay - money ?
                    pay - money : (e[1] < pay - money ? e[1] : 0);
                pay = Number((pay - shoudHave).toFixed(2));
                e[1] = e[1] - Number(shoudHave.toFixed(2));
                result.push([e[0], Number(shoudHave.toFixed(2))]);
                return result;
            }
            else {
                return result;
            }
        }
        else {
            return result;
        }
    }, []);
    result.cash = Number(change.reduce((sum, a) => (sum += a[1]), 0).toFixed(1));
    result.cid = Number(cid.reduce((sum, a) => (sum += a[1]), 0).toFixed(1));

    if (result.cid < Number((cash - price).toFixed(1)) || result.cash !== Number((cash - price).toFixed(1))) {
        final_result.status = "INSUFFICIENT_FUNDS";
        final_result.change = [];
    }
    else if (result.cid === Number((cash - price).toFixed(1))) {
        final_result.status = "CLOSED";
        final_result.change = cid;
    } else {
        final_result.status = "OPEN";
        final_result.change = change;
    }
    return final_result;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);