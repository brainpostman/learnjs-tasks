new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// не выполниться, ошибка произойдет после выполения всего кода промиса, в т.ч. перехвата