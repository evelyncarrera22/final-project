$(document).ready(function() {
          $("#lipstick").click(function() {

                    var url = "https://api.shopstyle.com/api/v2/products/?pid=uid5961-39322531-89&cat=lipstick&fl=b3487"
                    $.getJSON(url, function(response) {
                              console.log(response)
                              $("#lipstick-results").append(response.products[0].brandedName)
                              var url= response.pro 
                              $("#lipstick-results").append('<img src="'+ url + '">')
                              for (i = 0; i < response.products.length; i++) {
                                        $("#lipstick-results").append(response.products[i].brandedName)
                                        var url= response.products[i].image.sizes.Medium.url
                              $("#lipstick-results").append('<img src="'+ url + '">')
                                        $("#lipstick-results").append("<br>")
                              }
                    });
          })

});
