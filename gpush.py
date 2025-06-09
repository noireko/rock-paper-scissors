import subprocess

msg = input("Commit message: ")

subprocess.run(["git", "add", "."])
subprocess.run(["git", "commit", "-m", msg])
subprocess.run(["git", "push"])