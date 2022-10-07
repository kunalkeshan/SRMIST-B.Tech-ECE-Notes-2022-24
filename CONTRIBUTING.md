# Contributing

### **Table of Contents**

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Standards and Guidelines](#standards-and-guidelines)
  - [Semester Data Guidelines](#semester-data-guidelines)
  - [Notifications Data Guidelines](#notifications-data-guidelines)
- [Forking](#forking-the-project)
- [Basic Contributing](#basic-contributing-guidelines)
  - [Making Changes](#making-a-change)
- [Advanced Contributing](#advanced-contributing-guidelines)
  - [Clone the Client Branch Alone](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Cloned Before? Pull changes this way](#cloned-before-pull-changes-this-way)
- [Creating a Pull Request](#creating-a-pull-request)
- [Merging a Pull Request](#merging-a-pull-request)
- [Questions](#questions)

## Getting Started

When contributing to ECE Notes Website, it's good to know our best practices, tips, and tricks. First, ECE Notes Website is written in JavaScript, CSS, and HTML (in order of language usage within the project); thus, we assume you are comfortable in these languages or have basic knowledge of them.

## How to Contribute

There's two separate guidelines for how to contribute to the website. If you're simply looking for to make some changes to any one of the following files...

- `/src/data/semesters.json`.
- `/src/data/semesters/semester1...8.json`.
- `/src/data/extendedNotes.json`
- `/src/data/notifications.json`.
- README.md
- CONTRIBUTING.md
- Or any documentation related file.

Refer to the [Basic Contributing Guidelines](#basic-contributing-guidelines). This guide will go over how to do so easily, and without the need to set up a local development server.

If you're looking to make deeper code changes that affect functionality, or will require screenshots of the changes, please refer to [Advanced Contributing Guidelines](#advanced-contributing-guidelines).

## Standards and Guidelines

Below are a set of general guidelines for different types of changes.

### Semester Data Guidelines

Usually no change is required for this file, although, if there is some change in links for data related to a semester, make sure that you've done the following before submitting your changes...

**For Updates located in `/src/data/semesters.json`.**

- ID matches the current semester number.
- Credits and Number of Courses are up-to date as per 2020-2024 regulations.
- Repo Link points towards the right folder.
- Download Link works and downloads the semester specific folder.
- Drive Link points to the drive location of the notes.

**For Updates located in `/src/data/semesters/semester1...8.json`.**

- Make sure subject code and name match from curriculum.
- Credits for the subject is correct.
- Difficulty being subjective, refer to someone who has taken the subject and get the difficulty on a scale of 1 - 10.
- Repo Link points towards the right folder.
- Download Link works and downloads the semester specific folder.
- Drive Link points to the drive location of the notes.

### Notifications Data Guidelines

**For Updating Notifications in `/src/data/notifications.json`.**

- When adding new notifications, add them in descending order of their dates. (newest ones come on the top)
- ID should be 6 characters long containing any alphanumeric characters and should be unique.
- If there is no link and link text associated with the notification, it can be left as empty and/or null.
- If link and link text is present, add `{link}` in the message property to insert the link.

## Forking The Project

First you will have to obtain your own copy of the ECE Notes repository, also known as **"forking"**. Click [here](https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/fork) to open the fork wizard or go to the top right of your screen and then click the fork button.

![Forking ECE Notes Project](/assets/contributing/forking.jpg)

This will create a clone of the repository under your own account. Navigate to your profile now and click on the new repository called `SRMIST-B.Tech-ECE-Notes-2022-24` under your profile.

## Basic Contributing Guidelines

### Prerequisites

You must have a browser that can access GitHub, and possess a GitHub account. Once you have those two things, you're ready to move on to making your contribution(s)!

The steps for basic contributions are showcased splendidly in this [youtube video](https://youtu.be/Hw_-YuYX8TA), so it is recommended you watch it.

### Contributing-

#### Making a Change

There are two methods to making a change in the code.

**Option 1** - Visual Studio Code Web Editor (Recommended)

If you are not a developer and wish to contribute semester data, notifications update or any documentation related contributions, having a text editor will make contributions much easier. To make complex edits without installing anything, we recommend using GitHub's VS Code web editor. In your fork of `SRMIST-B.Tech-ECE-Notes-2022-24` (fork it first), go to the Code tab of the repo and press `.`(the period/dot key). This will open up the repo in an online VS Code instance you can use to edit files in the browser.

On the bottom left side of the editor you'll see the main branch selected, click on it and the gui will ask to select or create a new branch, select the `client` branch to make contributions to the website.

| Finding Main Branch | Selecting Client Branch |
| ---- | ---- |
| ![Finding Main Branch](/assets/contributing/finding-main-branch.jpg) | ![Selecting Client Branch](/assets/contributing/selecting-client-branch.jpg) |

Once you are done making your changes, go to the Source Control tab in the activity bar with Ctrl/Cmd + Shift + G, click the + next to the files you've changed to stage them, type a brief message summarizing the changes made in the commit, and press Ctrl/Cmd + Enter to commit your changes to your fork.

Once done, move on to the [next section to create a pull request](#creating-a-pull-request).

**Option 2** - GitHub Web UI

You're now ready to make a change. Navigate to the file that you're looking to contribute to in your forked repository. Once you navigate to the file, you should see an Edit icon (shaped as a pencil) on the right:

![Edit with Github Web UI](/assets/contributing/edit-with-gh-web-gui.jpg)

*Note however that some files that are too large might not have this option. In these cases you will need to download the code and create edits outside of the GitHub web UI. Refer to [Advanced Contributing Guidelines](#advanced-contributing-guidelines)*

At this point, you should take a look at [Standards and Guidelines](#standards-and-guidelines) to view guidelines for theme, language, and semester data contributions.

Once you've completed your change, you're ready to commit them. At the bottom of the edit file screen, you will find the commit UI. In the first box, you want to put in a title that describes the change you made. Then in the description field, you can put in any additional detail to supplement your title further.

You will find two radio buttons, one prompts you to commit directly to your current branch, and the other prompts you to create a new branch for your commit and start a pull request. Select the first option to commit the change directly to your current branch.

Click `Commit changes` once you are ready to proceed.

![Commit Changes](/assets/contributing/commit-changes-gh-gui.jpg)

## Advanced Contributing Guidelines

For deeper code changes, that affect the functionality of the website follow this guideline.

**[Fork](#forking-the-project) the Repository if you've not done it already.**

### Clone the Repository

You won't be able to clone directly from the `main` branch and then switch to the `client` branch. As the `main` branch contains the notes and large files which will take tons of time to clone and then switch.

Instead, you have to clone the client branch directly. Use the following command to clone the client branch from your forked repository.

```bash
git clone --single-branch --branch client https://github.com/{YOUR USERNAME}/SRMIST-B.Tech-ECE-Notes-2022-24
```

### Install Dependencies

`cd` into the app, install the dependencies and start the application.

```bash
npm install --legacy-peer-deps
npm start
```

Make the changes that you want to implement. After you've done making them, stage and commit your changes, make sure to push them.

Next head over to your forked repository and follow the [next steps to creating a pull request](#creating-a-pull-request).

### Cloned Before? Pull changes this way!

Using `git pull` will pull all the branches of this repo. As mentioned before, this project is heavy and clonning the `main` branch is not necessary. Use the command below to specifically pull changes from the `client` branch alone.

```bash
git pull origin client
```

## Creating a Pull Request

You can repeat the steps above for as many changes as needed. Once you are done making all your code changes and you have committed them to your branch, you are ready to make a pull request (PR). Go back to the main page of your forked repository. Ensure that your current branch (which is likely still master at this point) is up to date. You can do so by clicking the following button:

![Fetch Upstream](/assets/contributing/fetch-upstream.jpg)

Once up to date, you can click the Contribute button to open a PR.

Create a pull request:

![Contribute](/assets/contributing/contribute.jpg)

Be sure to add a good description to the PR and that the source and destination branches at the top look correct. The `base repository` and `base branch` should be listed as `kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24` and `client` respectively, and on the right of that should be your forked repository and the branch you have your changes on.

Once done, click on Create pull request to officially publish your PR.

## Merging a Pull Request

All you have to do now is wait for approval or comments and go from there!

Once your PR is approved, all that is left to do is merge it!

## Questions

For any Queries on your development process, contact [Kunal Keshan](mailto:kunalkeshan12@gmail.com).

Looking to contribute to the Notes? Follow the [CONTRIBUTING.md](https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/blob/main/CONTRIBUTING.md) guidelines from the `main` branch.
