import Calculator from "./Calculator";

class DecCalculator extends Calculator {

    /**
     * Method add numbers in two array
     */
    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
            let carryBit = numberX[i] + numberY[i] + result[i];
            if (carryBit === 2) {
                result[i] = 0;
                result[i - 1] = 1;
            } else if (carryBit === 3) {
                result[i] = 1;
                result[i - 1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    /**
     * Method changing number
     */
    changeNumber(root) {
        const input = root.firstElementChild;
        input.setAttribute("contenteditable", "true")
        input.classList.add("active");
        input.focus();

        this.checkNumber();
        this.updateResult();
    }
}

export default DecCalculator;