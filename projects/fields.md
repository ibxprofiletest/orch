# Fields

You can **tailor your projects** to fit your workflow **by managing project fields**. There are two main types of fields in Orchestra: default fields and custom fields.

To create, edit, or delete fields, you must have one of the following roles: Workspace Owner, Workspace editor, Project owner, or Project Editor.

## **Default fields**

<table><thead><tr><th width="171">Field name</th><th width="250">Selection Type</th><th>Description</th></tr></thead><tbody><tr><td>Project</td><td>User-Selected</td><td>A project to which the task belongs</td></tr><tr><td>Parent task</td><td>User-Selected</td><td>A task in which another task is nested</td></tr><tr><td>Assignee</td><td>User-Selected</td><td>A member assigned to a task</td></tr><tr><td>Due date</td><td>User-Selected</td><td>A date or date range in which the task is planned to be completed</td></tr><tr><td>Status</td><td>User-Selected</td><td>A task status</td></tr><tr><td>Owner</td><td>Automatic<br>Can be changed</td><td>A member who created the task, the owner can be changed</td></tr><tr><td>Priority</td><td>User-Selected</td><td>Task priority</td></tr><tr><td>Created at</td><td>Automatic</td><td>The date when the task was created</td></tr><tr><td>Completed at</td><td>Automatic</td><td>The date when the task was completed</td></tr></tbody></table>

*Currently, default fields are automatically created for each new project. In the near future, you will have the option to disable any of these fields for specific projects as needed.*

## Custom fields

Here are the **field types** we have in Orchestra:

<table><thead><tr><th width="142">Field type</th><th width="183">Selection type</th><th>Description</th></tr></thead><tbody><tr><td>Date</td><td>Single</td><td>Allows users to set additional dates beyond the Due Date field</td></tr><tr><td>Member</td><td>Single<br>Multiple</td><td>Allows users to add other workspace members as participants in a task</td></tr><tr><td>Chat</td><td>Single<br>Multiple</td><td>Allows users to create links to other chats within the workspace</td></tr><tr><td>Option</td><td>Single<br>Multiple</td><td>Allows users to select from a predefined list of options</td></tr><tr><td>Text</td><td>Single</td><td>Allows users to enter text</td></tr><tr><td>Status</td><td>Single</td><td>Allows users to create a custom status workflow</td></tr></tbody></table>

*In the near future, additional field types will be added, including Number, Link, Big Text, and more.*

### Creating fields

To **create a new field**, follow these steps:

* Go to [project-settings](https://docs.orch.so/projects/project-settings "mention");
* Click the `+` button to the right of the Fields header;
* Select the field type you want to create;
* Enter a field name;
* For Option and Status fields, add the available options;
* For fields with selections, choose the selection type: single or multiple;
* Click `Done` to save the field.

<figure><img src="https://3938682482-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbDYnojqBx3mFJiOzqCWp%2Fuploads%2FIDb1TOAvBiDUqLtbL7gt%2FCreating%20fields-2.png?alt=media&#x26;token=73920918-e8ed-4d97-a7a9-5be47af12d1b" alt=""><figcaption></figcaption></figure>

### Editing fields

You can **edit all created custom fields and the default status field**. To edit a field:

* Go to [project-settings](https://docs.orch.so/projects/project-settings "mention");
* Click on the field type you want to edit. The field block will open;
* Click on the field you want to edit;
* To edit the field name, click on it and modify it;
* To edit a field option, click on the option and make the changes;
* Click Done to save the changes.

### Deleting fields

To **delete a field**:

* Go to [project-settings](https://docs.orch.so/projects/project-settings "mention");
* Right-click on the field type you want to delete;
* Select `Remove` from the context menu.

*Fields are deleted without any confirmation modal, and all deleted information will be permanently lost.*

<figure><img src="https://3938682482-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbDYnojqBx3mFJiOzqCWp%2Fuploads%2FDbNHpAQ5uoJPY6LDduyG%2FDeleting%20fields.png?alt=media&#x26;token=3813a153-4c73-4464-8654-a71b7f97127a" alt=""><figcaption></figcaption></figure>

## Status Field

Every project in Orchestra has a preset status field with the following statuses:&#x20;

* Backlog;&#x20;
* To do;&#x20;
* Doing;&#x20;
* Review;&#x20;
* Done.&#x20;

If needed, you can edit the preset status field or create several additional statuses. &#x20;

### Primary Project

If you **create several status** fields in a project, you can set a Primary project. For this:

* Open [project-settings](https://docs.orch.so/projects/project-settings "mention");&#x20;
* Click the Primary status field value and choose it in the opened dropdown menu.

## Fields order and visibility

You can **adjust the order and visibility of fields** in List, Kanban, and the Info block.

### Changing Field Order in the List

You can **change field order** in list by the two ways: in the list header and in `Field` dropdown menu.

#### Reorder Fields in the List header:

* In the List view header, click and hold the field you want to reorder;
* Drag the field left or right by moving cursor to the desired position.

#### Reorder fields via the `Field` dropdown menu:

* Click the `Field` button in the top-right corner;
* Click and hold the drag icon next to the field;
* Drag the field by moving cursor up or down to the desired position.

<figure><img src="https://3938682482-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbDYnojqBx3mFJiOzqCWp%2Fuploads%2FLhR39WDMLYm8VkKQHC2J%2FChange%20field%20order%20in%20List.png?alt=media&#x26;token=3d00e52e-5b2c-4b89-93a0-ddd3ee269279" alt=""><figcaption></figcaption></figure>

### Changing Field Order in Kanban

You can **reorder both fields and columns** in the Kanban view.

#### Reorder Fields in Kanban cards

* Click the `Field` button in the top-right part;
* Click and hold the drag icon next to the field;
* Drag the field by moving cursor up or down to the desired position.

#### Reorder columns in Kanban

* Click and hold the column name in Kanban;
* Drag the column by moving cursor left or right to the desired position.

### Changing Field Order in the Info Sidebar

* Open [project-settings](https://docs.orch.so/projects/project-settings "mention");
* Click and hold the drag icon of the field you want to reorder;
* Drag the field by moving cursor up or down to the desired position.

### Kanban default Grouping

You can choose a default field to group Kanban in the following way:

* Open [project-settings](https://docs.orch.so/projects/project-settings "mention");
* Click on the Kanban default grouping value and choose it in the opened dropdown menu.
