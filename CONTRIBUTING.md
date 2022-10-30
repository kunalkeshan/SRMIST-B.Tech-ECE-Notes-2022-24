# Contributing

### **Table of Contents**

- [Getting Started](#-getting-started)
- [How to Contribute](#-how-to-contribute)
- [Standards and Guidelines](#-standards-and-guidelines)
  - [Updating Semester README.md](#updating-semester-readme)
  - [Uploading Notes](#uploading-notes)
- [Forking](#-forking-the-project)
- [Basic Contributing](#-basic-contributing-guidelines)
  - [Making a Change](#making-a-change) 
- [Advanced Contributing](#-advanced-contributing-guidelines)
  - [Navigate to the specific folder](#navigate-to-the-specific-folder)
  - [Upload Notes](#upload-notes) 
- [Creating a Pull Request](#-creating-a-pull-request)
- [Merging a Pull Request](#-merging-a-pull-request)
- [Questions](#-questions)

## 🚀 Getting Started

When contributing to ECE Notes, it's good to know our best practices, tips, and tricks. First, ECE Notes is just a collection of notes and resources, you don't need to know any programming to get started in your contributions.


If you're not sure how to contribute using GitHub, fill out this form with the notes you have and I'll help you out to add them to this project.

📃 Link to Form: [https://forms.gle/6cREyxxw6mQqh5jp7](https://forms.gle/6cREyxxw6mQqh5jp7)

## ❓ How to Contribute

There's two separate guidelines for how to contribute to the notes. If you're simploy looking to make some files changes to any one of the following files...

- `README.MD`
- `Semester 1...8/README.md`
- `CONTRIBUTING.MD`
- Or any documentation related file.

Refer to the [Basic Contributing Guidelines](#basic-contributing-guidelines). This will go over how to easily make changes without having to upload any files locally.

If you're looking for uploading notes and resources to this project, please refer to the [Advanced Contributing Guidelines](#advanced-contributing-guidelines).

## 📐 Standards and Guidelines

### Updating Semester README

The table represents data for each subject and should contain all the fields mentioned. If you haven't taken the subject, then reach out to someone who has and get and idea for subjet difficulty whether it is easy, medium or hard. Also get study tips add for the respective subjects!

### Uploading Notes

- Make sure that you're adding notes to the right folder.
- Links from previous updates should be working.
- With GitHub, the max upload limit is `25mb`. So to add the notes to the drive, [reach out to me](#questions).

## 🗡️ Forking The Project

First you will have to obtain your own copy of the ECE Notes repository, also known as **"forking"**. Click [here](https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/fork) to open the fork wizard or go to the top right of your screen and then click the fork button.

![Forking ECE Notes Project](/assets/contributing/forking.jpg)

This will create a clone of the repository under your own account. Navigate to your profile now and click on the new repository called `SRMIST-B.Tech-ECE-Notes-2022-24` under your profile.

## 🐰 Basic Contributing Guidelines

You must have a browser that can access GitHub, and possess a GitHub account. Once you have those two things, you're ready to move on to making your contribution(s)!

The steps for basic contributions are showcased splendidly in this [youtube video](https://youtu.be/-0uS-PLAZhY), so it is recommended you watch it.

### Contributing-

#### Making a Change

There are two methods to making a change in the code.

**Option 1** - Visual Studio Code Web Editor (Recommended)

If you are not a developer and wish to contribute semester data, notifications update or any documentation related contributions, having a text editor will make contributions much easier. To make complex edits without installing anything, we recommend using GitHub's VS Code web editor. In your fork of `SRMIST-B.Tech-ECE-Notes-2022-24` (fork it first), go to the Code tab of the repo and press `.`(the period/dot key). This will open up the repo in an online VS Code instance you can use to edit files in the browser.

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

## 🤖 Advanced Contributing Guidelines

**[Fork](#forking-the-project) the Repository if you've not done it already.**

If you're looking to add notes and resources to this repository, follow the advanced guidelines mentioned below.

### Navigate to the specific folder

Go to the folder you want to add notes into.

![Navigate to folder](/assets/contributing/navigate-to-folder.jpg)

### Upload Notes

To upload notes to that specific selected folder, simply drag and drop to upload the whole folder.

Some things to keep in mind, GitHub allows maximum `25mb` file upload, so to add those notes in the drive, [reach out to me](#questions). You can temporarily upload the notes without the large files and add them to the drive later.

![Drag and Drop Upload](/assets/contributing/drag-and-drop-upload.jpg)

Commit your uploads with what you've added, and a short description and head over to creating a pull request to reflect your changes in the `main` branch of the `kunalkeshan/SRMIST=B.Tech-ECE-Notes-2022-24` Repository. Read the [next steps on how to create a Pull Request](#creating-a-pull-request).

## 👾 Creating a Pull Request

You can repeat the steps above for as many changes as needed. Once you are done making all your code changes and you have committed them to your branch, you are ready to make a pull request (PR). Go back to the main page of your forked repository. Ensure that your current branch (which is likely still master at this point) is up to date. You can do so by clicking the following button:

![Fetch Upstream](/assets/contributing/fetch-upstream.jpg)

Once up to date, you can click the Contribute button to open a PR.

Create a pull request:

![Contribute](/assets/contributing/contribute.jpg)

Be sure to add a good description to the PR and that the source and destination branches at the top look correct. The `base repository` and `base branch` should be listed as `kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24` and `main` respectively, and on the right of that should be your forked repository and the branch you have your changes on.

Once done, click on Create pull request to officially publish your PR.

## 🐙 Merging a Pull Request

All you have to do now is wait for approval or comments and go from there!

Once your PR is approved, all that is left to do is merge it!

## ❓ Questions

For any Queries on what type of material to add, contact [Kunal Keshan](mailto:kunalkeshan12@gmail.com).

Looking to contribute to the Website? Follow the [CONTRIBUTING.md](https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/blob/client/CONTRIBUTING.md) guidelines from the client branch.
