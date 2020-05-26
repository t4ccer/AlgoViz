var head;
var pSlow;
var pFast;
var delay = 700;
var str;
var finished = true;
var cyclePoint;
var asdf = 0;

function DrawCycledList(head) {
    var r1 = head;
    var counter = 0;

    while (r1.next != null) {
        if (r1 == cyclePoint)
            counter += 1;
        if (counter == 2)
            break;
        str += r1.v + "->" + r1.next.v + ";\n";
        r1 = r1.next;
    }
}

function DrawPointers() {
    str += `${pSlow.v}[fillcolor="red"]`;
    if (pFast.v)
        str += `${pFast.v}[fillcolor="blue"]`;
}

function render() {
    ResetGraph();
    DrawCycledList(head);

    var prev = pFast.next;
    pFast = pFast.next.next;
    pSlow = pSlow.next;

    if (pSlow == pFast) {
        ResetGraph();
        DrawCycledList(head);
        DrawPointers();
        str += `${pSlow.v}[fillcolor="purple"]`;
        str += `${pFast.v}[fillcolor="purple"]`;
        DrawToGraph();
        finished = true;
        return;
    }
    //end condition
    if (pFast != null && pFast.next != null) {
        DrawPointers();
        DrawToGraph();
        setTimeout(render, delay);
    } else {
        ResetGraph();
        DrawCycledList(head);
        if (pFast == null)
            pFast = prev;
        DrawPointers();
        DrawToGraph();
        finished = true;
        return;
    }
}

function reset() {
    if (!finished)
        return;
    finished = false;
    cyclePoint = null;
    head = ToLinkedList(document.getElementById("list").value.split(','));

    var cycleVal = document.getElementById("cyclePoint").value;
    var p = head;
    while (p.next != null) {
        if (p.v == cycleVal) {
            cyclePoint = p;
        }
        p = p.next;
    }
    p.next = cyclePoint;

    pSlow = head;
    pFast = head;

    ResetGraph();
    DrawCycledList(head);
    DrawPointers();
    DrawToGraph();

    setTimeout(render, delay);
}
reset();