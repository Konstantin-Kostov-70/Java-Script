function solve() {
    let sum = 1
    const add = () => {
        return sum ++
    }
    return add
}
const res = solve()
console.log(res())
console.log(res())
console.log(res())
console.log(res())