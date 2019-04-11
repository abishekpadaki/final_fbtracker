function searchFunction() {
    var x = document.getElementById("searchTxt").value;
    sessionStorage.setItem('st',x);
    document.location.href='search_page.html'
  }