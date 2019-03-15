# NPM

Install NPM on Windows. Now the version has to be compatible with the version with Hosted VS2017.

Current version for VS2017 (15-03-2019) is:

`Node.js: Version: 10.15.2`

`NPM: Version: 6.8.0`

<https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/Vs2017-Server2016-Readme.md>

## Installation

Already installed? Then you just need to make sure everything works by going to test.

### Manual

You can go with classic download from [nodejs](https://nodejs.org/en/download/).

It means that you need to handle the version manuel.

1. Download nodejs (Version)
2. Install nodejs
3. Ensure the NPM is part of the PATH

### NVM-windows

I like the idea that a manager handles the node.js (NPM) installation and that I can switch.

You can get it here: [NVM-windows](https://github.com/coreybutler/nvm-windows/releases).

1. Download NVM-windows
2. Install NVM-windows
3. nvm install 10.15.2
4. nvm use 10.15.2

Please note the PATH will include NPM and node.
Read more [here.](https://github.com/coreybutler/nvm-windows)

## Test on Windows

1. Open Powershell
2. Navigate to path where your `.csproj` is located
3. `npm -v`

If output is 6.4.1 or above then all is good.