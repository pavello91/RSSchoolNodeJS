const fs = require('fs');
module.exports = function validation_for_input(input) {
    if (fs.existsSync(input)) {
        return fs.createReadStream(input);
    } else if (!input) {
        process.stdout.write('Введите текст: ');
        return process.stdin;
    }
    process.stderr.write(
        (
            'Введенный вами файл ' + input + ' не существует, данные не корректны!!!'
        )
    );
    const exit = process.exit;
    exit(1);
};