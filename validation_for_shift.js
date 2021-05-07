module.exports = (shift) => {
    if (shift === undefined) {
        process.stderr.write('Данные о смещении не переданы');
        const exit = process.exit;
        exit(1);
    }
}