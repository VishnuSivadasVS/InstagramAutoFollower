const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
var list = document.querySelectorAll('.L3NKy');

function clikOnLink(link) {
    if (link.firstChild.nodeValue == "Follow") {
        link.click();
    }
}


function ScrollJS() {
    var current = document.documentElement.scrollTop;
    scrollTo(current, current+300);
}

async function Follow15(start, end) {
    for (i = start; i < end; i++) {
        clikOnLink(list[i]);
        console.log("Following Person: "+i);
        await timeoutPromise(5000);
    }
    ScrollJS();
}

async function FunctionMain() {

    for (i = 0; i <= list.length; i + 5) {
        if(i<=list.length-1){
            list = document.querySelectorAll('.L3NKy');
        }
        Follow15(i, i + 5);
        await timeoutPromise(60000);
    }

}

FunctionMain();
