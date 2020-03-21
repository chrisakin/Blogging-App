var fs = require ('fs');

const readableStream = fs.createReadStream('readTextFile.txt');

const writableStream = fs.createWriteStream('writeTextFile.txt');

console.log('start')

readableStream.on('data', function (data)  { 
    console.log('Hey!, am about to write what has been read from this file readTextFile.txt'); 
    var txt = '!'  
       var newdata = data + txt; //Append text string to the read data   
        if (writableStream.write(newdata) === true) {  
              console.log('Hey!, am done writing, Open the file writeTextFile.txt to see what has been written'); 
                   }    
                   else  
                     console.log('Writing is not successful');
                     });
