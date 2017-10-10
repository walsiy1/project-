db.HSandy.find( { 'postedTime' : { $type : 2 } } ).forEach( function (x) {   
  x.postedTime = new Date(x.postedTime); // convert field to Date type
  db.HSandy.save(x);
});