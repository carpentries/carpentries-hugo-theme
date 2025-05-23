# The Carpentries Hugo Theme

This theme is used to build the websites for [The Carpentries](https://github.com/carpentries/carpentries.org), [Data Carpentry](https://github.com/datacarpentry/datacarpentry.org), [Library Carpentry](https://github.com/LibraryCarpentry/librarycarpentry.org), and [Software Carpentry](https://github.com/swcarpentry/software-carpentry.org/).  

This information is provided to give contributors the opportunity (but not the expecation) to build the site locally. All pull requests to the above four website repos will include a preview hosted by Netlify.

## Features

Styling is handled by [Tailwind](https://tailwindcss.com/)

## Dependencies
Go Version 1.18

## Installation

The first two steps may not be necessary when cloning one of our existing projects, as these are already set up as Hugo projects.  

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


## Maintenance

### Test theme on your local machine

To locally test this theme, you can have your project use your local clone instead of this GitHub hosted version.  Go into the project’s own `go.mod` file and add this line at the end.

```diff
module github.com/theNewDynamic/carpentries-project

go 1.18

require github.com/carpentries/carpentries-hugo-theme v0.0.0-20240530145900-caf8617804d0 // indirect

++ replace github.com/carpentries/carpentries-hugo-theme => /Users/username/path/to/dir/carpentries-hugo-theme
```

This will use your local directory on the project instead of the remote module. Now this is ok but you have to be careful not to commit this. Or

1. It will fail on everyone else machine including CI
2. We will look like amateurs 🤪

There is an other solution documented [here](https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level) under “replacements”.

### Syncing the project with latest theme

Once theme changes have been pushed to the theme's repo, one need to make sure the project runs the latest version of the theme.

1. To do that one needs to go the project’s directory, and run from there the following:

    ```diff
    hugo mod get -u github.com/carpentries/carpentries-hugo-theme
    ```

    This should update the `go.mod` and `go.sum` files.

2. Changes to those two files can now safely be commited

### Documentation 

Documentation about this theme's features is included in [this repo's wiki](https://github.com/carpentries/carpentries-hugo-theme/wiki).
