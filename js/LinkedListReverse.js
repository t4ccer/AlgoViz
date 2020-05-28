var finished = true;
var head;
var p;
var delay = 500;
var prev = null;

function render() {
    ResetGraph();
    DrawList(p);
    DrawList(prev);
    if (p != null)
        drawPointer(p, "red");
    DrawToGraph();

    if (p == null) {
        finished = true;
        return;
    }

    let next = p.next;
    p.next = prev;
    prev = p;
    p = next;

    setTimeout(render, delay);
}

function reset() {
    if (!finished)
        return;
    finished = false;

    head = ToLinkedList(document.getElementById("list").value.split(','));
    prev = null;

    p = head;



    render();
}
reset();