// This recursive function creates a stack overflow.
// How can you fix this code by still keeping the recursive call around, but only adding
// something that you have learned in this section to not cause this stack overflow.

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  setTimeout(testloop, 0)

  function testloop() {
    let item = list.pop();

    if (item) {
      removeItemsFromList();
    };
  };
};

removeItemsFromList();
