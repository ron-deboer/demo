<script src="Components/tasklist.js" type="module"></script>
<script src="Components/taskitem.js" type="module"></script>
<script src="Components/edittask.js" type="module"></script>

<h3>Kanban Dashboard</h3>
<div id="dashboard">

    <task-list class="column" id="backlog" title="Backlog" tasks='<?= ($this->raw($tasks1)) ?>'></task-list>
    <task-list class="column" id="in-progress" title="In-Progress" tasks='<?= ($this->raw($tasks2)) ?>'></task-list>
    <task-list class="column" id="testing" title="Testing" tasks='<?= ($this->raw($tasks3)) ?>'></task-list>
    <task-list class="column" id="release" title="Release" tasks='<?= ($this->raw($tasks4)) ?>'></task-list>
    <task-list class="column" id="closed" title="Closed" tasks='<?= ($this->raw($tasks5)) ?>'></task-list>

</div>

<edit-task-item></edit-task-item>

<script src="js/dashboard.js"></script>
