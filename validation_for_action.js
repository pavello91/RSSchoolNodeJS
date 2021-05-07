module.exports = (action) => {
    if (action === undefined || (action !== 'decode' && action !== 'encode')) {
        process.stderr.write(
            ('Данные о кодировании/декодировании некорректные')
        );
        const exit = process.exit;
        exit(2);
    }
}