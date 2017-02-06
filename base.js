let cons = (x,y)=>{
    return (m)=>{
        if (m ==0) return x;
        else return y;
    }
}

let car = (pair) =>{
    return pair(0);
}

let cdr = (pair) =>{
    return pair(1);
}


let list = (arr) =>{
    if (arr.length<=0) return undefined;
    return cons(arr[0], list(arr.slice(1)));
}

let iterater = (list, f)=>{
    if (list){
        f(car(list));
        iterater(cdr(list), f);
    }
}

let map =(list, f) =>{
    if (!list) return null;
    return cons(f(car(list)), map(cdr(list),f));
}

let reduce = (list, f, init)=>{
    if (!list) return init;
    let r = f(init, car(list));
    return reduce(cdr(list), f, r);
}

let length = (list) =>{
    if (!list) return 0;
    return 1 + length(cdr(list));
}

let printList = (list) =>{
    iterater(list, x=>console.log(x));
}

//return nth in list
let listref = (list, n)=>{
    if (n >= length(list)) return null;
    if (n ==0) return car(list);
    else return listref(cdr(list), n-1);
}


/****************** level2 api **********************/

let reverse = (list) =>{
    return reduce(list, (prev,curr)=>{return cons(curr,prev)}, null);
}



let l = list([4,5,3,2,1]);
//printList(l);
//console.log(listref(l,5));
//console.log(length(l))
console.log(printList(map(l, (ele)=> ele *2)));

