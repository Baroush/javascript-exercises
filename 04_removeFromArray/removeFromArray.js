const removeFromArray = function(arr,val) {
const index = arr.indexOf(val);
if (index > -1) {
  arr.splice(index, 1);
}
return arr;
};
removeFromArray([1, 2, 3, 4], 3,2);
// Do not edit below this line
module.exports = removeFromArray;
