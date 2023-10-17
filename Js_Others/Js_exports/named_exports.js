const multiply_table = (num) => {
    for (let c = 0; c <= 10; c++) {
        console.log(`${num}x${c} = ${num*c}`)
    }
}

const sum_table = (num) => {
    for (let c = 0; c <= 10; c++) {
        console.log(`${num}+${c} = ${num+c}`)
    }
}

export { multiply_table, sum_table }