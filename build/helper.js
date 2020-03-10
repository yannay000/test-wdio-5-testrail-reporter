const fs = require("fs");

class Helper {

    checkSuite(suiteId){  // проверка есть ли раны с этим сьютом
        let fileContent = fs.readFileSync(runFile, "utf8");
        if (fileContent==''){
            return 0; // нет
        }
        else {
            let arr = this.read()
            for (let line of arr){
                if (line[1] == suiteId){
                    return line[0]  // есть
                }
            }
        }
        return 0; // нет
    }

    write(arr){  // записать в файл строку со сьютом
        for (let a of arr){
            //console.log(a)
        fs.appendFileSync(runFile, a)
        fs.appendFileSync(runFile, ',')
        }
        fs.appendFileSync(runFile, '\n')
    }

    read(){ // считать весь файл, разбив его на массив [][]
        let fileContent = fs.readFileSync(runFile, "utf8"); 
        let fc = fileContent.split('\n');
        //console.log("placem "+fileContent.indexOf('\n'))
        //console.log("lent "+fc.length)
        fc.splice(-1)
        let all = []
        for (let line of fc){
            //console.log(line);  
            let l = line.split(',');  
            all.push(l) 
            l.splice(-1)   
            //console.log("l.length "+l.length)    
        }
        //console.log(all[0][1])
        return all
    }

    cases(suiteId) {  // вернуть список кейсов из переданного сьюта
        let case_arr = []
        let arr = this.read()
        for (let line of arr){
            if (line[1] == suiteId){  // если строка из нашего сЪюта
                //console.log("line[2] "+line[2])
            for (let i=0;i<line.length;i++){
                if (i>1){
                    //console.log("line[i] "+line[i])
                    case_arr.push(line[i])  // добавляем все ее кейсы массив
                }
            }
            }          
        }
        //console.log("case_arr "+case_arr)
        return case_arr
    }

}

module.exports = Helper;