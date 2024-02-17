function FindProxyForURL(url, host) {
  if(dnsDomainIs(host,"ip138.com") || shExpMatch(url,"*21mm.cc/*")){
    return "SOCKS 192.168.10.8:10081; DIRECT";
  } else {
    return "DIRECT";
  }
}
