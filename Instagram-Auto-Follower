const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
const list = document.querySelectorAll('.L3NKy');

function clikOnLink(link) {
    if (link.firstChild.nodeValue == "Follow") {
        link.click();
    }
}


function ScrollJS() {
    scrollTo(document.documentElement.scrollTop, 1000);
}

async function Follow15(start, end) {
    for (let i = start; i < end; i++) {
        await timeoutPromise(3000);
        clikOnLink(list[i]);
    }
    ScrollJS();
}

const asyncLoop = async () => {

    for (let i = 0; i < list.length; i + 15) {
        if (list.length == i) {
            const list = document.querySelectorAll('.L3NKy');
        }
        Follow15(i, i + 15);

        await timeoutPromise(60000);
    }

}

asyncLoop();
