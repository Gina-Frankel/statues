# frozen_string_literal: true
require_relative 'split_br.rb'

def get_unique_slavers(array)
  split_elements = array.map do |element|
    split_br(element)
  end
  split_elements.flatten.uniq
end
