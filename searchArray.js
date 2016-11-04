function search(num, count) {
    var low, high, mid, i, flag = 0;
    low = 0;
    high = count - 1;

    while (low <= high) {
        flag = 0;
        mid = ~~((low + high) / 2);

        for (i = low; i < mid; i++) {
            if (num[i] > num[mid]) {
                low = mid + 1;
                flag = 1;
                break;
            }
        }

        if (flag == 1) {
            continue;
        }

        for (i = mid + 1; i <= high; i++) {
            if (num[i] < num[mid]) {
                high = mid - 1;
                flag = 1;
                break;
            }
        }

        if (flag == 1) {
            continue;
        }

        if (flag === 0) {
            return num[mid];
        }
    }
    return -1;
}

var arr = [56,3,34,87,55,90,100,98,120];
console.log("array:",arr);
console.log("the num is:"+search(arr,arr.length));