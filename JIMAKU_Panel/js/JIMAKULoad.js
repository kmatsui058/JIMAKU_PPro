const PATH = require('path');
const PSD = require('psd');
const FS = require('fs');
const RMDIR = require('rmdir');
const FILECOPY = require('filecopy')
const JSONPath = "/JIMAKU.json";
const VOICEJSONPath = "/VOICE/VOICE.json";
const VOICESavePath = "/VOICE";
const ModelJSONPath = "/model.json";
const MODELPath = "/model";
const VOICEPath  = "/voice/Voice.exe";
const MKDIRP = require('mkdirp');
const EXEC = require('child_process').exec;