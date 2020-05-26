var headA;
var headB;
var p1;
var p2;
var delay = 500;
var str;
var finished = true;

function DrawPointers() {
    str += `${p1.v}[fillcolor="red"]`;
    str += `${p2.v}[fillcolor="blue"]`;
}

function render() {
    ResetGraph();
    DrawList(headA);
    DrawList(headB);

    //Actual algoritm
    p1 = p1.next;
    p2 = p2.next;

    //end condition
    if (p1 != p2) {
        if (p1 == null) {
            p1 = headB;
        }
        if (p2 == null) {
            p2 = headA;
        }

        DrawPointers();
        DrawToGraph();
        setTimeout(render, delay);
    } else {
        if (p1 != null) {
            str += `${p1.v}[fillcolor="purple"]`;
            str += `${p2.v}[fillcolor="purple"]`;
        }

        DrawToGraph();
        finished = true;
    }
}

function reset() {
    if (!finished)
        return;
    finished = false;

    common = ToLinkedList(document.getElementById("listC").value.split(','));
    if (common.v == "")
        common = null;

    headA = ToLinkedList(document.getElementById("listA").value.split(','), common);
    headB = ToLinkedList(document.getElementById("listB").value.split(','), common);

    p1 = headA;
    p2 = headB;

    ResetGraph();
    DrawList(headA);
    DrawList(headB);
    DrawPointers();
    DrawToGraph();

    setTimeout(render, delay);
}
reset();