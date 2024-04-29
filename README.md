# typescript-watch-repo

Repository to demonstrate minimal repro of TypeScript watching excessive files.

Repro steps:
```
npm install -g pnpm
pnpm -r install

# This will take a while since it creates 111110 empty folders.
pnpm -r build
cd b/2/b-impl/b

# This succeeds and enters watch state
pnpm run repro-5.0

# This throws `ENOSPC`
pnpm run repro-latest
```

Observe the line:
`DirectoryWatcher:: Added:: WatchInfo: /workspaces/typescript-watch-repo/a 1 undefined Failed Lookup Locations`

Create a file `tmp.txt` in `a/2/logs`, which should not be currently watched, as it is not relevant to any tsconfig or imported file.
Observe that TypeScript logs:
`DirectoryWatcher:: Triggered with /workspaces/typescript-watch-repo/a/2/logs/tmp.txt 0:: WatchInfo: /workspaces/typescript-watch-repo/a 1 undefined Failed Lookup Locations`