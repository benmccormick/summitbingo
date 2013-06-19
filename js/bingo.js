(function() {
  var fisherYates, freespace;

  freespace = {
    text: "Gospel is Presented",
    selected: true
  };

  window.BoardCtrl = function($scope, $http) {
    return $http.get('squares.json').success(function(data) {
      var squares;
      squares = fisherYates(data.squares);
      squares = squares.slice(0, 24);
      squares.splice(12, 0, freespace);
      $scope.squares = squares;
      return void 0;
    });
  };

  fisherYates = function(arr) {
    var i, j, tempi, tempj;
    i = arr.length;
    if (i === 0) {
      return false;
    }
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      tempi = arr[i];
      tempj = arr[j];
      arr[i] = tempj;
      arr[j] = tempi;
    }
    return arr;
  };

}).call(this);