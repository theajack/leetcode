/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let n = s.length;
    let 
    for(let i=0;i<n/2;i++){

    }
};

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sn = 0, tn = 0, sc = '', tc = '', sl = S.length-1, tl = T.length-1;
    let n = Math.max(sl, tl);
    for(let i=n;i>=0;i--){
        if(!sc){
            if(S[sl] === '#'){
                sn++;
                sc = '';
            }else{
                if(sn === 0){
                    sc=S[sl];
                }else{
                    sn--;
                }
            }
            sl--;
        }
        if(!tc){
            if(T[tl] === '#'){
                tn++;
                tc = '';
            }else{
                if(tn === 0){
                    tc=T[tl];
                }else{
                    tn--;
                }
            }
            tl--;
        }
        console.log(sc, tc)
        if(sc && tc){
            if(tc!==sc){
                return false;
            }
            sc = '';
            tc = '';
        }else{
            if(tc===undefined && sc){
                return false;
            }
            if(sc===undefined && tc){
                return false;
            }
        }
    }
    if((sc || tc) && sc!==tc){
        return false;
    }
    return true;
};