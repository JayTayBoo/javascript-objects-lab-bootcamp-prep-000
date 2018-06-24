var recipes = {}

function updateObjectWithKeyAndValue (obj, key, value){
  return obj.assign(obj, key, value)
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}