# HSL Timetables page

A simple web page, with a frontpage and a timetables subpage.
The timetable is read from a JSON file for simplicitys sake.

HSL provides [open data](https://www.hsl.fi/hsl/avoin-data#gtfs-rt-rajapinnat), but
unfortunately for us, the timetable Data is in PDF format, so nothing we can use here 😬

**Tech stack**

[Node](https://nodejs.org/en)(v18.19) + [TypeScript](https://www.typescriptlang.org/) + [Next](https://nextjs.org/docs/getting-started/installation) + [React](https://react.dev/learn/installation)

## Getting Started

First, this project requires [Node](https://nodejs.org/en) to work, so please install it if you haven't already.
(_Pro tip: [nvm](https://github.com/nvm-sh/nvm) makes it easy to manage multiple Node versions._)

To get things up and running, run the following commands in the terminal

```bash
# First install the dependencies
npm install

# Then start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

The subpages are created from their folder structure, so the folder `src/app/foo/` renders into `localhost:3000/foo/`

### Quality of Life things

#### Prettier

The project contains a `.prettierrc` file, which means it can be formatted with Prettier using VSCode, or other compatible editors (or via commands).

With VSCode:

1. Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Go to Settings
3. Search for "Default Formatter" and set it as Prettier
4. Search for "Format on save" and toggle it on, if it's not already
5. Now enjoy as Prettier formats your files on save, so you don't have to bother with indentations or which quotemarks to use.

#### Pretty TS Errors

TypeScript errors can often be confusing, so [Pretty TS Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) helps translating them.

## The challenges

Obviously, the UI is incomplete so the stops data should be formatted and shown in a user friendly way.

-  [ ] Parse the data (hint: `foreach()`, `map()`, etc.)
-  [ ] Create a type for it (optional, but not really)
-  [ ] Create a component to render the stop rows
   -  [ ] Create a component to render the hours and minutes
-  [ ] Arrange the entire table properly
   -  [ ] Fix the empty looking beginning
-  [ ] The website still uses a default favicon
-  [ ] Accessibility issues
   -  [ ] Missing title
   -  [ ] Issue with the voiceover (hint: languages?)

Additionally, the codebase it littered with code smells, which do not affect end product, rather lessen the quality of the code.

Code smells:

-  [ ] Incorrect function name for file
-  [ ] Repeating and confusing filenames
-  [ ] Unused assets?
