let links = {
  setColor: function(color) {
      let alist =  document.querySelectorAll('a');
      let i = 0;
      while(i < alist.length){
          alist[i].style.color = color;
          i++;
      }
  }
}

let body = {
  setColor: function(color){
      document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self){
  if(self.value === 'night') {
      body.setBackgroundColor('black');
      body.setColor('white');
      self.value = 'day';

      links.setColor('powderblue');
  } else {
      body.setBackgroundColor('white');
      body.setColor('black');
      self.value = 'night';

      links.setColor('blue');
  }
}