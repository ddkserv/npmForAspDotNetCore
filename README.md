# NPM for Asp Dot Net Core

The idea with this repo is to make a better setup for npm in Asp dot net core.

## Focus area

The repo will focus on:

* Visual Studio 2017
* node.js (NPM)
	* NVM as installer
* Web ASP.NET Core
* Artifactory (from a compatibility point of view)
* Azure DevOps (from a compatibility point of view)
 	* Visual Studio 2017 on Windows Server 2016 (Hosted VS2017)

## Bye bye bower... I welcome you, NPM

Bower had a very well integrated with Visual Studio but the end of line is near.

There is a lot of guide out there but none that talks about moving to a clean NPM replacement.

I will assume that you have bower setup that need to be replaced to NPM.

# NPM setup

Read more here: [NPM-installation.md](NPM-installation.md)

# Visual studio 2017 (VS2017)

I will assume that you have install the optional web development packages that comes with VS2017.

Install Package Installer Extension and read more here: [Package Installer](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.PackageInstaller)

Install NPM task runner Extension and read more here: [NPM task runner Extension](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner)

## Bower.json to Package.json

I have made an example of a bower.json converted to package.json.

[bower.json](bower.json)

[package.json](package.json)

I have more or less made a copy paste.

### testing it

You do need to figure out if the package is a 1:1 if not.

1. Open Visual Studio 2017.
2. Navigate to your project.
3. Expand the Dependencies.
4. Right click on NPM and click `Restore packages`
5. Look in the output windows from output `Bower/npm` if there is any errors.
6. Navigate to path `wwwroot/lib`

Open the file in Visual Studio 2017 and utilize the intellisense that the Package Installer provide.

## npmfile.js to replace bowerrc

This file is a generic file that will do the same as [bowerrc](bowerrc)... plus a bit of clean up.

[npmfile.js](npmfile.js)

It has two function `copyLib()` and `cleanLib()`.

If you install the NPM task runner you can play with it via that dev tool.

## Build

Every time you make a local build you need to have the packages updated just like bower so therefore, I have made changes in `.csproj`:

```xml
  <Target Name="PreBuild" BeforeTargets="PreBuildEvent">
    <Exec Command="npm run prepare" />
  </Target>
```

This is the same as:

1. Right click on the Project and select Properties
2. Click on Build events
3. In the Pre-build event command line type `npm run prepublish`
4. Press Ctrl + S (Saves the project)

On azure DevOps I have made a task that will do the

1. `npm install`.
2. dotnet restore
3. etc. etc. etc.

# Other

This is other stuff and why stuff has been removed.

## Webpack

To minimize the tool chain this is not used. If bundling and minifying is needed then I will use this.
This is a good option for bundling and minifying. Currently I have not included this but it is possible to add.

## Yarn. Why not

To minimize the tool chain this is not used.
I will not do YARN since that is basically a shell in front of NPM. At the same time NPM has a good integration with Artifactory.

## Gulp

To minimize the tool chain this is not used.
Is an options however the NPM javascript can replace the Gulp.

## Grunt

To minimize the tool chain this is not used.
Is an options but however the NPM javascript can replace the Grunt.

## Libary Manager

To minimize the tool chain this is not used.
This is a tool that is integrated with Visual Studio and graps files from cdnjs. A tool that is matching bower very well however you do not have all packages avalaible yet (19-12-2017). Also it is unclear if artifactory is supported.

## Links for inspiration

* <https://www.linkedin.com/pulse/use-npm-instead-bower-gulp-grunt-visual-studio-aspnet-naghizadeh/>
* <https://www.npmjs.com/package/recursive-copy>
* <https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/Vs2017-Server2016-Readme.md>
* <https://github.com/coreybutler/nvm-windows>
* <https://nodejs.org/en/download/>
* <http://www.catrina.me/asp-net-core-easy-transition-of-bower-to-npm/>