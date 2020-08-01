const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
var list = document.querySelectorAll('.L3NKy');

function clikOnLink(link) {
    if (link.firstChild.nodeValue == "Follow") {
        link.click();
    }
}

function ScrollJS(selector) {
    if(selector == "suggested"){
        var current = document.documentElement.scrollTop;
        scrollTo(current, current+300);
    }
    else if(selector == "othersfollowers"){
        var fDialog = document.querySelector('div[role="dialog"] .isgrP');
        fDialog.scrollTop = fDialog.scrollTop + 300;
    }
}

async function FollowPeople(start, end,selector) {
    for (i = start; i < end; i++) {
        clikOnLink(list[i]);
        console.log("Person: "+i);
        await timeoutPromise(10000);
    }
    ScrollJS(selector);
}

async function FunctionMain(selector) {

    for (i = 0; i <= list.length; i + 5) {
        if(i<=list.length-1){
            list = document.querySelectorAll('.L3NKy');
        }
        FollowPeople(i, i + 5,selector);
        await timeoutPromise(80000);
    }

}

FunctionMain("suggested");
