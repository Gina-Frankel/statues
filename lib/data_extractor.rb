def extract_links_from_string(string)
  match = /https:\/\/artuk.org\/discover\/artworks\/.+?\//.match(string)
  [match.to_s]
end 

