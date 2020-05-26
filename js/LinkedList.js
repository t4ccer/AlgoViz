class ListNode {
    constructor(v, next = null) {
        this.v = v;
        this.next = next;
    }
}

function ToLinkedList(arr, tail = null) {
    var start = new ListNode(0);
    var head = start;
    for (let n of arr) {
        head.next = new ListNode(n);
        head = head.next;
    }
    head.next = tail;
    return start.next;
}

function ResetGraph() {
    var bg = "#ffffff";
    var ec = "black";
    if (document.body.classList.contains("dark-theme")) {
        bg = "#292a2d";
        ec = "white";
    }

    str = `strict digraph 
    {
        graph [bgcolor="${bg}"]
        edge [color="${ec}"]
        node[shape="circle" style=filled fillcolor="#a9a9b3" color="#252627" width=0.7]
        rankdir="LR";
    `;
}

function DrawList(head) {
    var r1 = head;

    while (r1.next != null) {
        str += r1.v + "->" + r1.next.v + ";\n";
        r1 = r1.next;
    }
}

function DrawToGraph() {
    var graph = d3.select("#graph")
        .graphviz()
        .zoom(false)
        .dot(str + "}")
        .render();
}