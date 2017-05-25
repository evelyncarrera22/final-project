$(document).ready(function() {
          $("#covergirl").click(function() {
                    var url = "https://api.shopstyle.com/api/v2/products/?pid=uid5961-39322531-89&cat=eye-shadow&fl=b4153"
                   // var url = "https://api.shopstyle.com/api/v2/products/?pid=uid5961-39322531-89&cat=lipstick&fl=b4153"
                    $.getJSON(url, function(response) {
                              console.log(response)
                              $("#covergirl-results").append(response.products[0].brandedName)
                              var url= response.pro 
                              $("#covergirl-results").append('<img src="'+ url + '">')
                              for (i = 0; i < response.products.length; i++) {
                                        $("#covergirl-results").append(response.products[i].brandedName)
                                        var url= response.products[i].image.sizes.Medium.url
                              $("#covergirl-results").append('<img src="'+ url + '">')
                                        $("#covergirl-results").append("<br>")
                              }
                    });
          })

});
