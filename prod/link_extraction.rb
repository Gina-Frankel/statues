require_relative '../lib/data_extractor'
require_relative '../lib/array_to_csv'

file = File.read(__dir__ + '/../data.txt' )

result = extract_links_from_string(file)

array_to_csv(result)