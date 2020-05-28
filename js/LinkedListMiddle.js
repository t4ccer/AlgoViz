var finished = true;
var head;
var pFast;
var pSlow;
var delay = 500;

function render() {
    ResetGraph();
    DrawList(head);
    drawPointer(pSlow, "red");
    drawPointer(pFast, "blue");
    DrawToGraph();

    pSlow = pSlow.next;
    if (pFast.next == null || pFast.next.next == null) {
        finished = true;
        return;
    }
    pFast = pFast.next.next;

    setTimeout(render, delay);
}

function reset() {
    if (!finished)
        return;
    finished = false;
    head = ToLinkedList(document.getElementById("list").value.split(','));
    pSlow = head;
    pFast = head;

    render();
}
reset();