$(document).ready(function () {
    let footer = document.querySelector(".leaves-selected__footer");

    const table = $("#leaveRequestsTable").DataTable({
        columnDefs: [
            {
                orderable: false,
                render: DataTable.render.select(),
                targets: 0,
            },
        ],
        select: {
            style: "multi",
            selector: "td:first-child",
        },
        order: [[1, "asc"]],
        paging: true,
        pageLength: 5,
        layout: {
            bottomStart: null,
            bottomEnd: {
                paging: {
                    previousNext: true,
                    firstLast: false,
                    numbers: false,
                },
            },
            bottom: "info",
            topStart: null,
            topEnd: null,
        },
        language: {
            info: "_START_-_END_ OF _MAX_",
            paginate: {
                previous: "PREVIOUS",
                next: "NEXT",
            },
            select: {
                rows: null,
            },
        },
    });

    table.on("select", function (e, dt, type, indexes) {
        if (type === "row") {
            footer.classList.remove("close");
            footer.classList.add("open");
        }
    });

    table.on("deselect", function (e, dt, type, indexes) {
        if (type === "row") {
            footer.classList.remove("open");
            footer.classList.add("close");
        }
    });
});
