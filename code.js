function quicksort(a) {
    b = Array(a.length) //empty array we fill up and sort
    p = 0 //where we end searching
    k = 0 //where we start searching
    s = 0 //storing the pivot
    g = 0 //where to put numbers that are less than the pivot
    m = 0 //where the pivot we used goes in the array after pivoting
    
    //acts like a while loop because i couldnt figure out how to make while loops work
    for(l = 0; l < a.length; l++){
        //checks to see if the arrray is sorted, or if we need to pivot something
        for(i = 0; i <= a.length; i++){
            //part that checks to see if the loop is sorted
            if(a[i] <= a[i+1] || a[i] == undefined || a[i+1] == undefined){
                p = -1
                k = 0
                //part to see if we have gone through the whole list
                if(i == a.length){
                    l = a.length*a.length+1
                }
            }
            else{
                //this for loop is for finding where the pivot we need to pivot starts
                for(j = i; j >= 0; j--){
                    if(a[j] == undefined){
                        k = j+1
                        j = -1
                    }
                }
                //this for loop is for finding where the pivot we need to pivot ends
                for(j = i; j <= a.length+1; j++){
                    if(a[j] == undefined){
                        p = j-1
                        j = a.length+10
                    }
                }
                i = a.length
                s = a[k]
                g = k
                m = k
            }
        }
        //this for loop is for pivoting the array
        for(i = k; i < p; i++){
            if(s > a[i+1] && a[i+1] != undefined){
                a[g] = a[i+1] 
                g = g+1
                //this for loop is for when we find something smaller than the pivot we need to move the bigger things back one
                for(j = i+1; j > g; j--){
                    a[j] = a[j-1]
                }
                m = m+1
            }
            
        }
        if(l < a.length*a.length){
            b[m] = s
            a[m] = undefined
        }
    }
    //this for loop sets b as the final answer
    for(i = 0; i < a.length; i++){
        if(a[i] != undefined){
            b[i] = a[i]
        }
    }
    return b;
}
