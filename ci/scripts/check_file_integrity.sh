#!/bin/sh

# array of (registered) files or directories to be there
set -- "$@"
ok=1

# Check whether all files in the array also exist in the folder
for f in "$@"; do
  [ -f "$f" ] || [ -d "$f" ] || (ok=0 && echo "$f: not found")
done

# Check if there are files or directories that are not in the array
for f in *; do
  found=0
  # echo "===: $f"
  for g in "$@"; do
    # echo "::: $g"
    [ "$f" = "$g" ] && found=1
  done
  [ "$found" = 0 ] && echo "$f: in directory but not listed" && ok=0
done

if [ "$ok" = 1 ]; then
  echo "File structure integrity check is successful"
  exit 0
else
  echo "File structure integrity check failed!"
  exit 1
fi
