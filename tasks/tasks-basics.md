# Tasks Basics

## Overview

A **task** is the core entity in your project management workflow. It represents an individual piece of work that needs to be completed within a project.

Tasks help break down larger projects into manageable steps. You can assign tasks to team members, set due dates, add descriptions, attach files, and track progress. Tasks can also be structured into subtasks to handle more complex projects.

The [tasks-page](https://docs.orch.so/pages-and-ui-elements/tasks-page "mention") is where you’ll spend most of your time managing tasks. This page lists tasks from all your projects, allowing you to filter, sort, and prioritize them based on deadlines, assignees, or other criteria. This helps keep your work organized and manageable.

Tasks support up to four levels of nesting, allowing you to create structured task hierarchies, such as:&#x20;

* Launch new landing page
  * Design phase
    * Create wireframes
      * Review wireframes with the team
    * Design high-fidelity mockups
      * Get feedback from stakeholders
    * Finalize design
      * Prepare assets for development
  * Development phase
    * Set up development environment
      * Install required dependencies
    * Implement front-end code
      * Code HTML structure
      * Implement CSS styling
      * Add JavaScript interactivity

## Tasks Layouts

All tasks on [tasks-page](https://docs.orch.so/pages-and-ui-elements/tasks-page "mention") are presented in two default layouts: List and Kanban. Additionally, you can create custom layouts. Both default and custom layouts are available across all projects and views.

For more details on how layouts work, see [project-layouts](https://docs.orch.so/projects/project-layouts "mention") and <mark style="background-color:purple;">Views Layouts.</mark>

## Task Chat

Each task has its own chat for discussions and collaboration. You can access a task chat in three ways:

1. From the Chats page: find the task in the chat list and click on it;
2. From the Tasks page:&#x20;
   1. Find the task in the [#tasks-block](https://docs.orch.so/pages-and-ui-elements/tasks-page#tasks-block "mention");
   2. Hover the cursor over it;&#x20;
   3. Click on the chat icon that appears to the right of the task name.
3. From the Task Info:&#x20;
   1. Click on the task on the Tasks page;
   2. Click the info icon in the top left corner of the screen;
   3. Click the chat icon in the top left corner of the Info block.

## Create Task

You can create a new task in several ways:

1. On the Chats page;
2. On the Tasks page;
3. From a message in a chat;

### Creating a Task on the Chats Page

* Go to the Chats page;
* Click `Create New Chat` icon in the top right corner of the left sidebar;
* Choose `Task` in the dropdown menu;
* Enter the task name and press `Enter`;
* After creation, you can add members and start a conversation in the task chat, or fill in task details in the opened [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention")

This method is ideal for quickly creating tasks and immediately collaborating on them. For bulk task creation or setting up a structured task hierarchy, the [tasks-page](https://docs.orch.so/pages-and-ui-elements/tasks-page "mention") is recommended.

### Creating a Task on the Tasks Page

There are several different ways to create a task on the [tasks-page](https://docs.orch.so/pages-and-ui-elements/tasks-page "mention") depending on the[#tasks-layouts](#tasks-layouts "mention") you use.

#### Creating a Task in List Layout

There are two main ways to create a task in List layout:

* Using the `+` icon in the `Name` column. This action creates a new task at the start of the task list.
* Using `+Add task` action at the bottom of the task list. This action creates a new task at the end of the task list.
* Using Insert Task Line -  `+Add task` action between tasks in the task list. This action creates a new task between existing tasks.

After doing any of these actions, follow the next steps to finish creating a new task:

* Type the task name in the input field that appears;
* Press `Enter` to create the task, or `cmd`\\`ctrl` + `Enter` to create the task and open [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention") to set it up;

After pressing `Enter`, a new input field appears, allowing you to quickly create multiple tasks without needing to click any additional actions in the interface. Additionally, you can press `Tab` to move the newly created task to the next nesting level, effectively making it a subtask.

#### Creating a Task in Kanban Layout

Use `+` icon in the header of Kanban columns to create a new task in Kanban.

### Create Subtask

You can create a subtask in two ways: in List layout  [#default-layouts](https://docs.orch.so/projects/project-layouts#default-layouts "mention") , and in [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention")

#### Creating a Subtask in List Layout

Creating a subtask via [context-menu](https://docs.orch.so/pages-and-ui-elements/context-menu "mention")

* Right-click on the task you want to create a subtask for;
* Click on `+Add subtask` action in the displayed [context-menu](https://docs.orch.so/pages-and-ui-elements/context-menu "mention");
* Type the subtask name and press `Enter .`

Creating a subtask with Insert Task Line

* Hover the cursor between two tasks to display the Insert Task Line, which consists of a line and `+Add task` text;
* Click on the Insert Task Line;
* Type the task name in the appeared input field;
* Press `Tab` to nest the task on the next nesting level;
* Press `Enter` to create a new task, or `cmd`\\`ctrl` + `Enter` to create a task and open [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention") to set it up.

#### Creating a Subtask in Info Sidebar

Here are the steps to create a subtask in [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention"):

* Open [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention");
* Scroll down to the bottom of the sidebar;
* Click on the `+` icon in the Subtask block;
* Type the subtask name;
* Press `Enter`.

## Editing Task Name

You can edit the task name in several ways:

* In List layout;
* In Kanban layout;
* In [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention").

### Editing Task Name in List Layout

Follow the next steps to edit task name:

* Double-click on the task name in the list;
* Edit text in the task name input field;
* Press `Enter` .

### Editing Task Name in Kanban Layout

Follow the next steps to edit task name:&#x20;

* Double-click on the task name in kanban;
* Edit text in the task name input field;
* Press `Enter` .

### Editing Task Name in Info Sidebar

Follow the next steps to edit task name:

* Double-click on the task name in [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention")header;
* Edit text in the task name input field;
* Press `Enter` .

## Editing Task Fields

You can edit task fields in several ways:

* In List layout;
* In Kanban layout;
* In [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention").

The logic for editing fields remains the same across all these methods:

* Click on the task field you want to edit;
* In the opened Selector, select the necessary field value.

## Deleting a Task

### Deleting a Task on the Chats Page

* Find the task you want to delete in the chat list;&#x20;
* Right-click the task;
* In the opened context menu, select `Delete`;
* Click `Yes`  in the confirmation window.

### Deleting a Task on the Tasks Page

* Find the task you want to delete in the left sidebar;&#x20;
* Right-click the task name;
* In the opened context menu, select `Delete`;
* Click `Yes` in the confirmation window.&#x20;

### Deleting a Task in the Task Info

* On the Chats or Tasks page, choose the task you want to delete;
* Open Task Info by clicking on the Info icon in the top right corner of the screen;
* Click the `...` icon in the top right corner of the screen;
* In the opened context menu, select `Delete`;
* Click `Yes` in the confirmation window.

**Warning:** ***Deleting a task is permanent and cannot be undone.***

## Uploading files

You can add a file to your task in several ways:

* Click on the `Upload file` icon on the left of the text input field and choose the file you want to upload;
* Drag and drop the files you want to upload directly to the chat;
* Use the hotkey `cmd+V` or `ctrl+V` to paste a file from the clipboard.

**You can add multiple files at once.**

After adding a file, file uploading block will be displayed. In this block, you can remove files, change their order, and preview them.

## Leaving a Task

You can **leave a task** in several ways:

* From the [#projects-block](https://docs.orch.so/pages-and-ui-elements/tasks-page#projects-block "mention") on [tasks-page](https://docs.orch.so/pages-and-ui-elements/tasks-page "mention")
  * Find the task you want to leave;
  * Right-click the task;
  * In the opened context menu, select `Leave` ;
* From the Task header
  * Open the task you want to leave;
  * Right-click the Task header;
  * In the opened context menu, select `Leave` ;
* From the Task [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention")
  * Left-click on the `...` icon in the top right corner of the [info-sidebar](https://docs.orch.so/pages-and-ui-elements/info-sidebar "mention");
  * In the opened context menu, select `Leave` .
