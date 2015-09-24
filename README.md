# Getting Started in Visual Studio

Angular 2 documentation includes a
["Getting Started" chapter in TypeScript](https://angular.io/docs/ts/latest/guide/gettingStarted.html)

The instructions are good but not aimed at the Visual Studio 2015 developer.

Here is a repo that ports the sample (with extra 2-way binding!) to the Visual Studio 2015 world.

Confession: I took an existing Getting Started project and jammed it into VS
which isn't the best way to proceed.

## Steps

1. CREATE a Visual Studio solution name "angular2-getting-started"

1. DELETE the generated `index.html`, and `app` stuff.

1. IGNORE the `src` level in the instructions; just put everything
in the project root

	* node_modules
	* typings
	* index.html
	* package.json
	* tsconfig.json (more on that in a moment)

1. DO install the npm packages from the command line.

   **DO NOT** include node_modules in your project or you will be very sorry.

1. COPY `node_modules/traceur/bin/traceur-runtime.js` to another location.

   IIS refuses to serve ***anything*** from a directory named `bin` which
	 means you'll get a 404 later if you try to reference this.
	 I put my  copy in `node_modules/traceur/traceur-runtime.js`.

1. UPDATE the traceur script source in `index.html` to match the copy location.

1. EXPECT VS to ignore `tsconfig.json`. It uses settings in the `.csproj`

1. OPEN the properties of the project (Alt Enter)
	a. pick "Module System | commonJS"
	b. check "Generate source maps"
	c. check (leave checked) "Compile on save". This is nice!

1. EDIT the `.csproj` file in a text editor !!!

   Two critical settings are not exposed in Visual Studio.
	 Add them by hand next to the similarly named settings.
	 ```
	 <TypeScriptEmitDecoratorMetadata>True</TypeScriptEmitDecoratorMetadata>
    <TypeScriptExperimentalDecorators>True</TypeScriptExperimentalDecorators>
	 ```

1. RUN it (without debugging) by pressing Ctrl-F5