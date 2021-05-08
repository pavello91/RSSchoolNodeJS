const fs = require('fs');
module.exports = function work_with_output(output) {
    if (fs.existsSync(output)) {
        return fs.createWriteStream(output, {
            flags: 'a'
        });
    } else if (!output) {
        return process.stdout;
    }

    process.stderr.write(
        (
            'Введенный вами файл ' + output + ' не существует, данные не корректны!!!'
        )
    );
    const exit = process.exit;
    exit(1);
};