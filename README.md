# Описание запуска task1

## Аргументы для передачи

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

## Все выполнялось в соответвии понимая ТЗ
Реализовано с помощью потоков pipeline


Необходимо зайти в папку RSSchoolNodeJS-task1 из командной строки:
cd RSSchoolNodeJS-task1
Проинициализировать модули:
npm init

Далее следующий образец команды: 
// для encode
node task -a encode -s 8  -i "input.txt" -o "output.txt" 
// для decode
node task -a decode -s 8 -o "input.txt" -i "output.txt"
