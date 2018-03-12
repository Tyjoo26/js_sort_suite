
var array = [4,3,5,1,2]

function reOrganize(array, index, newIndex) {
  var temp = array[index];
  array[index] = array[newIndex];
  array[newIndex] = temp;
}

function bubbleSort(array){
  for( var index = 0 ; index < array.length; index++){
    for(var newIndex = 1; newIndex < array.length; newIndex++){
      if(array[newIndex-1] > array[newIndex]){
        reOrganize(array, newIndex-1, newIndex);
      }
    }
  }
  return array
}


export default bubbleSort
