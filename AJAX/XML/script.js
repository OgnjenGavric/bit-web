function getGeolocationData() {
  var input = document.getElementById("ip-input").value;
  var url = "https://www.geoplugin.net/xml.gp?ip=" + input;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var xml = this.responseXML;
      var country = xml.getElementsByTagName("geoplugin_countryName")[0].childNodes[0].nodeValue;
      document.getElementById("country-name").innerHTML = country;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
