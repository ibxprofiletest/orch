# User Roles

In Orchestra, we've designed a simple yet powerful way to **manage access and permissions** within your workspace.

## Basic role model approach

Orchestra follows a **basic role-based access model** with three primary entities that make up the structure of any workspace: Workspace, Project, and Task. Each of these entities has specific roles that determine access and control: Owner, Editor and Member.

It forms our basic role model:

* Workspace Owner;
* Workspace Editor;
* Project Owner;
* Project Editor;
* Task Owner;
* Task Editor;
* Member;
* Assignee;
* Guest.

This model allows you to **divide a workspace in separate zones**, each with its own admins, members, and processes.

### Workspace Owner

This is the most powerful role in a workspace. There can be only one Workspace Owner per workspace. Here are the **primary actions available to a Workspace Owner**:

* **Full Access**: Access to all data, projects, chats, and other resources in the workspace, excluding private projects and group chats where they are not a member;
* **Create, Edit, and Delete**: Ability to create, edit, and delete any entity within the workspace, even those they didn’t create;
* **Manage Users**: Invite, remove, or deactivate any user in the workspace;
* **Add and Remove Members**: Add or remove members from any entity in the workspace;
* **Transfer Ownership**: Transfer the Workspace Owner role to another member;
* **Delete Workspace**: Delete the entire workspace.

In other words, a Workspace Owner can perform any action within the workspace and **has access to almost everything** within it.

### Workspace Editor

A **Workspace Editor** role can be granted to any member of a workspace by a Workspace Owner or another Workspace Editor. There is **no limit** to the number of Workspace Editors in a workspace.

The permissions of a Workspace Editor are similar to those of a Workspace Owner but with some restrictions. Here are the **primary actions a Workspace Editor can perform**:

* **Access to Data**: Access to all data, projects, chats, etc., in the workspace, except private projects or group chats where they are not a member;
* **Create Entities**: Create any entity within the workspace;
* **Edit and Delete**: Edit or delete entities they created but not those created by other members;
* **Manage Users**: Invite, remove, or deactivate any user except for Workspace Owners or other Workspace Editors;
* **Add and Remove Members**: Add or remove members from entities they have permission to access, except for Owners and Editors.

To summarize, a Workspace Editor can perform almost all actions within the workspace, but cannot edit or delete data created by other users.

### Project Owner

The **Project Owner** role is assigned when a member creates a project. A Project Owner has the following permissions within their project:

* **Manage Members**: Add or remove members and assign roles within the project;
* **Edit and Delete**: Edit and delete the project they created;
* **Task Management**: Create, edit, and delete tasks within the project;
* **Transfer Ownership**: Transfer the **Project Owner** role to another member;
* **Full Access**: Access to all data in the project, including subprojects, tasks, chats, and attachments;

In essence, a Project Owner **has full control over their project**.

### Project Editor

A **Project Editor** can be appointed by the Project Owner, another Project Editor, Workspace Owner, or Workspace Editor. The **permissions of a Project Editor** are as follows:

* **Manage Members**: Add or remove members and assign roles within the project, except for the Project Owner or Project Editors;
* **Edit Projects**: Edit the project but cannot delete it;
* **Task Management**: Create and edit tasks within the project, but cannot delete tasks;
* **Access Data**: Access to all data in the project, including subprojects, tasks, chats, and attachments.

The Project Editor role is designed to **allow users to manage and control projects but without destructive actions**, such as deleting data or removing owners and editors from a project.

### Task Owner

The **Task Owner** role is assigned when a member creates a task. A Task Owner can perform the following actions:

* **Manage Members**: Add or remove members from the task and assign roles;
* **Edit and Delete**: Edit and delete the task they created;
* **Access Data**: Full access to all task data, including subtasks, attachments, and other relevant information.

### Task Editor

The **Task Editor** role can be granted by a Task Owner, another Task Editor, Project Owner, Project Editor, Workspace Owner, or Workspace Editor. The **permissions of a Task Editor** are as follows:

* **Manage Members**: Add or remove members from the task and assign roles, except for Task Owners or other Task Editors;
* **Edit Tasks**: Edit the task, but cannot delete it;
* **Access Data**: Full access to all data within the task, including tasks, subtasks, and attachments.

The basic idea of the Task Editor role is to **give users ability to manage and control tasks, but without destructive actions** like deleting data or removing owners and editors from a task.

### Member

A **Member** is a basic role in Orchestra that has access only to the entities they have been added to directly. Here are the **basic actions a member can perform**:

* **Create Entities**: Create projects, tasks, chats, and teams, and edit or delete only those entities they have created;
* **Manage Members**: Add members to the entities they created;
* **Access Data**: Access to all data in the entities they created.

To sum it up, a Member **has access only to the entities they've been added to** without permissions to edit or delete them.

### Assignee

An **Assignee** is a standart role in task management which is used to assign a user to a task. An Assignee can:

* **Edit the Task**: The Assignee can edit the task they are assigned to;
* **View Data**: Full access to task data (subtasks, attachments, etc.) related to their assigned task.

### Guest

A **Guest** is a special role used to add users to one or several chats within the workspace. Guests are **only added to task-related chats** and have the following permissions:

* **Access**: Access to the task chat they’ve been added to;
* **Send Messages**: Ability to send messages within the task chat.

As you can see, the Owner and Editor roles are powerful and possess a lot of rights within a workspace. One of these rights is to have access to any entity that is located under the entity where a user has the Owner or Editor role. As the Orchestra user, you can check who has access to any entity by checking the `Who Can View` block in the `Members tab` of the Info sidebar -[#members-tab](https://docs.orch.so/pages-and-ui-elements/info-sidebar#members-tab "mention").

## Managing roles

There are several ways to **manage roles within your workspace**:

* Teams page;
* Members tab.

### Teams page

On the Team page, you can **manage workspace roles at the workspace level**:

* Workspace Owner;
* Workspace Editor;
* Member.

To **set a role**, right-click on a member's name or click the menu icon in the right corner of the member row. In the context menu, choose the role you want to assign.

<figure><img src="https://3938682482-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbDYnojqBx3mFJiOzqCWp%2Fuploads%2FB8Nq3xLfn3zGSqcfX5oO%2FTeams%20Page_members.png?alt=media&#x26;token=ac8359a2-e701-4cfe-b161-5014ac2b6bbf" alt=""><figcaption></figcaption></figure>

### Members tab

Each entity in Orchestra has a **Members tab** within the Info block. To access this:

* Right-click on an entity, select `Open info`, and then click the Members tab;
* On the Chats and Tasks pages, click the Members icon in the header of the chat, task, or project.

In the Members tab, each member’s role is displayed next to their name. Click the role to open a menu where you can assign a different role.

<figure><img src="https://3938682482-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbDYnojqBx3mFJiOzqCWp%2Fuploads%2FJR0qeDsTrT8E5A5uUHvI%2FOwner%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png?alt=media&#x26;token=fb4c5d7d-b2d7-4c29-aaa4-78e096080130" alt=""><figcaption></figcaption></figure>

## Channel role model

Channels in Orchestra have a distinct role model from the basic one. The are **three roles** for channels:

* Channel Owner;
* Channel Publisher;
* Channel Subscriber.

### Channel Owner

The Channel Owner is the member who created the channel. They have the following **permissions**:

* To edit and delete the channel;
* To add or remove publishers;
* To add or remove subscribers;
* To publish messages in the channel.

### Channel Publisher

A Channel Publisher role can be assigned by the Channel Owner. They have the **permission**:

* To publish messages in a channel.

### Channel Subscriber

A Channel subscriber can **access and read all messages** within the channel.

<figure><img src="https://3938682482-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbDYnojqBx3mFJiOzqCWp%2Fuploads%2F8m0k0sRphnkQXZzW6yau%2FChannel%20role%20model.png?alt=media&#x26;token=b70fd4c9-6a83-41e7-99bb-899561af6360" alt=""><figcaption></figcaption></figure>

## Views role model

Views in Orchestra have a distinct role model. To better understand how views work, please check this page: [#views-block](https://docs.orch.so/pages-and-ui-elements/tasks-page#views-block "mention")

A **view** is visible only to its owner and its members, and workspace owners/editors can be added to views.

The **roles for views** are:

* View Owner;
* View Editor;
* View Member.

### View Owner

The user who created the view gets the **View Owner** role. They have **full control over the view** and can:

* Add and remove members to a view and assign roles to them;
* Edit and delete the view they created;
* Transfer the View Owner role to another view member;
* Modify the view configuration (filters, grouping, sorting).

### View Editor

Any member of a workspace can be appointed with the **View Editor** role. This role can be assigned to a member by the View Owner or the View Editor. They can:

* Add and remove members (except for removing the View Owner and View Editors);
* Edit the view (but not delete it);
* Modify the view configuration (filters, grouping, sorting).

The basic idea of the View Editor role is the same as of the View Owner's, but without destructive actions such as deleting the view or removing its owners and editors.

### View Member

A **View Member** has **access to a view without any editing or deleting permissions**.

*We are continuously working on improving Orchestra's role model. Access and permissions management will be enhanced in future updates.*
