function display(s) {
    document.getElementById('timer').innerHTML = s;
}

function start() {
    setTimeout(() => {
        display(10);
        setTimeout(() => {
            display(9);
            setTimeout(() => {
                display(8);
                setTimeout(() => {
                    display(7);
                    setTimeout(() => {
                        display(6);
                        setTimeout(() => {
                            display(5);
                            setTimeout(() => {
                                display(4);
                                setTimeout(() => {
                                    display(3);
                                    setTimeout(() => {
                                        display(2);
                                        setTimeout(() => {
                                            display(1);
                                            setTimeout(() => {
                                                display("Happy Independence Day !!!");
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000)
}

start();
