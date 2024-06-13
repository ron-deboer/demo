document.addEventListener("DOMContentLoaded", function () {
    const dragItems = document.querySelectorAll(".colTask");
    dragItems.forEach((item) => {
        item.addEventListener("dragstart", function (ev) {
            ev.dataTransfer.setData("text/plain", ev.target.id);
            ev.currentTarget.style.backgroundColor = "#cff";
        });
    });
    const dropTargets = document.querySelectorAll(".column");
    dropTargets.forEach((target) => {
        target.addEventListener("dragover", function (ev) {
            ev.preventDefault();
        });
        target.addEventListener("drop", function (ev) {
            const el = ev.target;
            const status = el.querySelector(".colHeader").innerText.trim();
            const id = ev.dataTransfer.getData("text");
            const draggableElement = document.getElementById(id);
            const dropzone = el.querySelector(".colTasks");
            dropzone.appendChild(draggableElement);
            ev.dataTransfer.clearData();

            app.eventBus.emit("task-status", { id, status });
        });
    });
    const editlinks = document.querySelectorAll(".editLink");
    editlinks.forEach((item) => {
        item.addEventListener("click", function (ev) {
            ev.preventDefault();
            const id = ev.target.parentNode.id;
        });
    });
    app.eventBus.on("task-status", ({ detail }) => {
        setTimeout(async function () {
            const resp = await fetch(
                `api/Task/status/${detail.id}/${detail.status}`
            );
            const data = await resp.json();
        }, 10);
    });
});

function openEditModal(id) {
    setTimeout(async function () {
        const resp = await fetch(`api/Task/${id}`);
        const data = await resp.json();
        const row = {
            id: data[0].id,
            taskid: data[0].taskid,
            desc: data[0].desc,
            comment: data[0].comment,
        };
        app.renderForm("modal-1", row);
        app.openModal("modal");
    }, 10);
}

function saveTask() {
    setTimeout(async function () {
        const id = $val("id");
        const resp = await fetch(`api/task/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                taskid: $val("taskid"),
                desc: $val("desc"),
                comment: $val("comment"),
            }),
        });
        const data = await resp.json();
    }, 10);
}
