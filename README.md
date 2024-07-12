# Theme Name

## Features

Styling is handled by [Tailwind](https://tailwindcss.com/)



## Installation

1. Init project as a hugo module with `hugo mod init {name of repo}`. Ex: `hugo mod init github.com/carpentries/my-project`
2. Add the theme to your project using modules as such:

```yaml
# hugo.yaml
# Imports the theme into the projects
module:
  imports:
    - path: github.com/carpentries/carpentries-hugo-theme
  mounts:
  - source: layouts
    target: layouts
  - source: assets
    target: assets
  - source: archetypes
    target: archetypes
  - source: hugo_stats.json
    target: assets/watching/hugo_stats.json
# Make sure Tailwind 3 will work on `hugo serve`
build:
  writeStats: true
  buildStats:
    disableClasses: false
    disableIDs: false
    disableTags: false
    enable: false
  cachebusters:
    - source: assets/watching/hugo_stats\.json
      target: styles\.css
    - source: (postcss|tailwind)\.config\.js
      target: css
    - source: assets/.*\.(js|ts|jsx|tsx)
      target: js
    - source: assets/.*\.(.*)$
      target: $1
```

2. run `hugo mod npm pack`. This will generate the necessary `package.json` with the theme's dependencies.
3. run `npm install`
4. run `hugo serve` to navigate your project locally


