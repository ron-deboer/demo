<div class="container">  
    <h3>Kanban Dashboard</h3>          
    <div id="dashboard">
        <!--           -->   
        <div id="backlog" class="column">
            <div class="colHeader bgRed">
                Backlog
            </div>
            <div class="colTasks">
                <?php foreach (($tasks1?:[]) as $task): ?>
                    <div class="colTask" id="<?= ($task['id']) ?>" data-taskid="<?= ($task['taskid']) ?>" draggable="true">                     
                        <div>
                            <img src="images/edit.png" width="30px" height="30px" class="linkImage editLink" onclick="openEditModal('<?= ($task['id']) ?>')"></img>                        
                        </div>
                        <div>
                            <?= ($task['desc'])."
" ?>
                        </div>                        
                    </div>
                <?php endforeach; ?>                
            </div>  
        </div>  
        <div id="in-progress" class="column">
            <div class="colHeader bgYellow">
                In-Progress
            </div>
            <div class="colTasks">                                  
                <?php foreach (($tasks2?:[]) as $task): ?>
                    <div class="colTask" id="<?= ($task['id']) ?>" data-taskid="<?= ($task['taskid']) ?>" draggable="true">                     
                        <div>
                            <img src="images/edit.png" width="30px" height="30px" class="linkImage editLink" onclick="openEditModal('<?= ($task['id']) ?>')"></img>                        
                        </div>
                        <div>
                            <?= ($task['desc'])."
" ?>
                        </div>                        
                    </div>
                <?php endforeach; ?> 
            </div>  
        </div>  
        <div id="testing" class="column">
            <div class="colHeader bgBlue">
                Testing
            </div>
            <div id="testing" class="colTasks">
                <?php foreach (($tasks3?:[]) as $task): ?>
                    <div class="colTask" id="<?= ($task['id']) ?>" data-taskid="<?= ($task['taskid']) ?>" draggable="true">                     
                        <div>
                            <img src="images/edit.png" width="30px" height="30px" class="linkImage editLink" onclick="openEditModal('<?= ($task['id']) ?>')"></img>                        
                        </div>
                        <div>
                            <?= ($task['desc'])."
" ?>
                        </div>                        
                    </div>
                <?php endforeach; ?> 
            </div>  
        </div>  
        <div id="release" class="column">
            <div class="colHeader bgGreen">
                Release
            </div>
            <div id="release" class="colTasks">
                <?php foreach (($tasks4?:[]) as $task): ?>
                    <div class="colTask" id="<?= ($task['id']) ?>" data-taskid="<?= ($task['taskid']) ?>" draggable="true">                     
                        <div>
                            <img src="images/edit.png" width="30px" height="30px" class="linkImage editLink" onclick="openEditModal('<?= ($task['id']) ?>')"></img>                        
                        </div>
                        <div>
                            <?= ($task['desc'])."
" ?>
                        </div>                        
                    </div>
                <?php endforeach; ?> 
            </div>  
        </div> 
        <div id="closed" class="column">
            <div class="colHeader bgPurple">
                Closed
            </div>
            <div id="closed" class="colTasks">
                <?php foreach (($tasks5?:[]) as $task): ?>
                    <div class="colTask" id="<?= ($task['id']) ?>" data-taskid="<?= ($task['taskid']) ?>" draggable="true">                     
                        <div>
                            <img src="images/edit.png" width="30px" height="30px" class="linkImage editLink" onclick="openEditModal('<?= ($task['id']) ?>')"></img>                        
                        </div>
                        <div>
                            <?= ($task['desc'])."
" ?>
                        </div>                        
                    </div>
                <?php endforeach; ?> 
            </div>  
        </div>                                                    
    </div>
</div>  

<div id="modal-overlay">
    <div id="modal">
        <div class="modal-header">
            <h2>Task Details</h2>
        </div>
        
        <div id="modal-1" class="modal-content">
            <form action="Task" method="post">
                <fieldset>
                    <input id="id" type="hidden" /> 
                    <label for="taskid">Task Id</label>
                    <input id="taskid" type="text" placeholder="Task Id" />
                    <label for="desc">Description</label>
                    <input id="desc" type="text" placeholder="Description" />
                    <label for="comment">Comment</label>
                    <input id="comment" type="text" placeholder="Comment" />
                </fieldset>
            </form>               
        </div>
        
        <div class="modal-footer">
            <button id="close-modal" onclick="app.closeModal()">Close</button>
            <button onclick="saveTask()">Save</button>
        </div>
    </div>    
<div>  

<script src="js/dashboard.js"></script>
