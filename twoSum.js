function two_sum(arr, target) {
    // Write your code herel
    let map={}
    for(let i=0;i<=arr.length;i++){
        if(target-arr[i] in map){
            return [map[target-arr[i]],i]
        }else{
            map[arr[i]]=i
        }
    }
}