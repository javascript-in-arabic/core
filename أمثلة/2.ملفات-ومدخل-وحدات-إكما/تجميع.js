#!node

const path = require('path');
const rimraf = require('rimraf');
const arabi = require('../../حزمة/arabi');
const arabiMaps = require('@arabi/maps');

// const code = fs.readFileSync('./examples/2.arabi', { encoding: 'utf8' });

const OUTPUT = path.resolve(__dirname, './خارج');

rimraf.sync(OUTPUT);

arabi.translate({
  input: path.resolve(__dirname, './داخل'),
  output: OUTPUT,
  entry: path.resolve(__dirname, './داخل/مدخل.جس'),
  maps: arabiMaps.commonjs,
  globalObject: "global"
});
