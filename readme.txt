# GIT COMMAND TO UNLINK PROJECT FROM THE GIT

rmdir .\.git -Recurse -Force




# EXPLANATION OF THIS COMMAND

rmdir: This is an alias for the Remove-Item cmdlet in PowerShell, which is used to delete files and directories.

.\.git: This specifies the path of the directory you want to remove. In this case, it's the .git directory, which is commonly associated with version control systems like Git. The .\ represents the current directory, so it points to the .git directory in the current location.

-Recurse: This is a switch parameter that indicates that the command should remove items recursively. It means that not only the specified directory (..git) will be removed, but also all of its contents and subdirectories.

-Force: This is another switch parameter that forces the removal without prompting for confirmation. It suppresses any confirmation prompts that might otherwise be displayed.





# PUSH PROJECT TO GITHUB

git init
git add .
git commit -m "Add existing project files to Git"
git remote add origin https://github.com/cameronmcnz/example-website.git
git push -u -f origin master