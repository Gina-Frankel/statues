# frozen_string_literal: true

require 'csv'
require_relative './../lib/get_unique_slavers.rb'
require_relative './../lib/array_to_csv.rb'

file = CSV.read(__dir__ + '/../Slaver_data_handling.csv')

puts 'Read file'

file.flatten!

puts 'Flattened array'

unique_slavers = get_unique_slavers(file)

puts 'Writing to csv'

array_to_csv(unique_slavers)

puts 'Done'
