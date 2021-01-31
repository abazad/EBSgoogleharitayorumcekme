//EBS Coding Team

var kullaniciadi=$x("//div[@class='section-review-title']");
var kullanciyorum =$x("//div[@class='section-review-review-content']");
var text1;
var text2;
for (i = 0; i < kullaniciadi.length; i++) {
  text1 += kullaniciadi[i].innerText + "<br>";
  text2 += kullanciyorum[i].innerText + "<br>";
}

