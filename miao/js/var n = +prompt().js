var n = +prompt()

var nums = []

for (var i = 0; i < n; i++) {
  var num = +prompt()
  nums.push(n)
}

var target = +prompt()
var count = 0
for (var i = 0; i < n; i++) {
  if (nums[i] == target) {
    count++
  }
}

console.log(count)