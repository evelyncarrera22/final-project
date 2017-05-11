// JavaScript File
$(document).ready(function() {
          $("#regular").click(function() {
                   
var url = "https://api.shopstyle.com/api/v2/products/?pid=uid5961-39322531-89&cat=nail-polish&fl=b4187"
          $.getJSON(url, function(response) {
                    console.log(response)
          $("#results").append(response.products[0].brandedName)
          for (i = 0; i <response.products.length; i++) { 
                    $("#results").append(response.products[i].brandedName)
                    $("#results").append("<br>")
          }
          });
          })
          
});
