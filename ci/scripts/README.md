this folder contains scripts for the CI to build the importmap and peer dependencies for the Juno project.

## Generate Importmap

### 1. generate Testdata

you can create testdata for the ESM build by running the following command:

```bash
  node ./generate_testdata.js
```

this script will generate a folder called `test_data` in the scripts folder. It will run trough all our apps and libs in the juno project to compile ready made builds. This data will have the same structure as the data of the input folder from our pipeline build step. In other words the test data script will generate compiled versions from our apps and libs in the latest version that we can use to generate the ESM modules and `importmap` for our peer dependencies.

### 2. generate ESM modules for peer dependencies

you can generate the ESM modules for the peer dependencies (aka `externals`) by running the following command:

```bash
  node ./esm_build/generate_importmap.mjs --src=test_data
```

the script will generate by default a folder called `externals` in the scripts folder. You can change the externals output path by `--external-path` option. This folder will contain the ESM modules for the peer dependencies. The `importmap` is also generated and is found by default in the folder where you run the command. You can change the output path by `--importmap-path` option. Note: with the `--env=development` option you can generate the importmap human readable.

With the `--src` you can specify a source folder that is used to get the pre build apps and libs.

To see more output use the `--verbose` option. For more options use `--help`

### 3. generate manifest.json

this step is optional. You can generate a `manifest.json` file that contains the information about apps and libs with version information and other stuff for the apps and libs in the juno project.

```bash
  node generate_manifest.mjs --src=test_data
```
