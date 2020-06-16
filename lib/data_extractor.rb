def extract_links_from_string(string)
  regex = /https:\/\/artuk.org\/discover\/artworks\/.+?\//
  match = string.scan(regex)
   match
end 

