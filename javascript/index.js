const fs = require('fs');

fs.writeFile("temp_programming.txt", "foo", {mode:fs.constants.S_IXUSR | fs.constants.S_IRUSR	});

const mode1 = fs.constants.S_IXGRP | fs.constants.S_IRUSR
fs.writeFile("temp_programming.txt", "bar", {mode1});
fs.appendFile(argOne, data, callback)
fs.appendFileSync(argOne, data)
fs.chmod(argOne, mode, callback)
fs.chmodSync(argOne, mode)

const mode2 = fs.constants.S_IXUSR;
const flags = 'w'
fs.open('temp_foo', flags, mode2, function (err, f) {
    if (err) {
        return console.error(err);
    }
    console.log(f);
    console.log("File opened!!");
});

fs.writeFileSync("temp_programming.txt", "foo", {mode:fs.constants.S_IXUSR | fs.constants.S_IRUSR	});

new Buffer(5);
new Buffer(res.body.size);

function getVarFromObject(someVar, obj) {
    obj.escapeMarkup = false;
    const someObjVar = {s: someVar}
    const val = obj[someObjVar.s]
    return val
}

const expression = new String("2 + 2");
eval(String(expression));




