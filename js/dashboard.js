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
            // update task status in db
            setTimeout(async function () {
                const resp = await fetch(`api/Task/status/${id}/${status}`);
                const data = await resp.json();
            }, 10);
        });
    });
    const editlinks = document.querySelectorAll(".editLink");
    editlinks.forEach((item) => {
        item.addEventListener("click", function (ev) {
            ev.preventDefault();
            const id = ev.target.parentNode.id;
        });
    });
});
