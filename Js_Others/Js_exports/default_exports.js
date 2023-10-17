function factorial (num) {
    if (num >= 0) {
        if (num == 0 || num == 1) {
            return 1

        } else {
            return num * factorial(num-1)

        }
    } else {
        return 'Invalid value'

    }
}

export default factorial