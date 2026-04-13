function showMessage() {
  document.getElementById("msg").innerText =
    "Hello Team! Guardians of the Sprint....This is Samruddhi this side :)";
}

function showGuide() {
  document.getElementById("msg").innerText =
    "Assignment Guide:\n\n" +
    "1. Clone the repo - copy the project to your local system.\n" +
    "2. Create a branch - keep your changes separate from main.\n" +
    "3. Make changes - edit only the required files.\n" +
    "4. Commit - save your work with a meaningful message.\n" +
    "5. Push - upload the branch to GitHub.\n" +
    "6. Create PR - ask for review and merge.\n" +
    "7. Update Jira - mark the task done after completion.";
}

function showGitCommands() {
  document.getElementById("msg").innerText =
    "Git Cheat Sheet:\n\n" +
    "git clone <url>\n" +
    "→ Copies the repository to your computer.\n\n" +
    "git checkout -b branch-name\n" +
    "→ Creates and switches to a new branch.\n\n" +
    "git status\n" +
    "→ Shows changed files and branch state.\n\n" +
    "git add .\n" +
    "→ Stages all changes for commit.\n\n" +
    'git commit -m "message"\n' +
    "→ Saves a snapshot of your work.\n\n" +
    "git push -u origin branch-name\n" +
    "→ Sends your branch to GitHub.\n\n" +
    "git pull origin main\n" +
    "→ Updates your local branch with latest changes.\n\n" +
    "git branch\n" +
    "→ Shows all branches in the repo.";
}
