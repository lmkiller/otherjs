function FindProxyForURL(url, host) {
  if(shExpMatch(host,"ip138.com") || shExpMatch(url,"https://*.21mm.cc/*")){
    return "SOCKS 192.168.10.8:10081; DIRECT";
  } else {
    return "DIRECT";
  }
}
