"use strict";

    // Program Me
    // let n = 120;
    // let binaryNum = String(n.toString(2));
    // console.log(binaryNum[4]);
    
    var countBits = function(n) {
        // Program Me
        let count = 0;
        let binaryNum = String(n.toString(2));
        for (let i = 0; i < binaryNum.length; i++){
          
          if (binaryNum[i] == 1){
            count = count + 1;
          }
          
        }
        return count;
      };
