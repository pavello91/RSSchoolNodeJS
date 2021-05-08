module.exports = (shift) => {
    if (shift === undefined) {
        process.stderr.write('Информации о смещении отсутствует');
        const exit = process.exit;
        exit(1);
    }
};