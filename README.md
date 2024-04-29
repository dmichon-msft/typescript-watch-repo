# typescript-watch-repo

Repository to demonstrate minimal repro of TypeScript watching excessive files.

Run this repro **on Linux**

Setup steps:
```
npm install -g pnpm
pnpm -r install

# This will take a while since it creates 111110 empty folders.
pnpm -r build
cd b/2/b-impl/b
```

### Repro (Good version)
The following command will successfully build and enter watching state
```
pnpm run repro-5.0
```

# Repro (bad version)
The following command will throw ENOSPC and exit before it ever finishes building
```
pnpm run repro-latest
```