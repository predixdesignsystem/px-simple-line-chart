function waitFor(done, fn) {
  var myInterval, myTimeout;

  myTimeout = setTimeout(function() {
    clearInterval(myInterval); // worst case, kill interval after 1/2 a second
    clearTimeout(myTimeout);
    done();
  }, 3001);

  // loop until calendar cells have rendered
  myInterval = setInterval(function() {
    if (fn()) { // if the function returns true, call done()
      clearInterval(myInterval);
      clearTimeout(myTimeout);
      done();
    }
  }, 50);
};
