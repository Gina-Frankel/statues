# frozen_string_literal: true

require 'get_unique_slavers'

describe 'get_unique_slavers' do
  it 'returns an array with John from an array with John twice' do
    input = %w[John John]
    output = ['John']
    expect(get_unique_slavers(input)).to eq output
  end
  it 'returns John and Pete from an array with John and Pete' do
    input = %w[John Pete]
    output = %w[John Pete]
    expect(get_unique_slavers(input)).to eq output
  end
  it 'splits out array elements that have "<br/> " separators' do
    input = ['John<br/> Dave', 'Pete']
    output = %w[John Dave Pete]
    expect(get_unique_slavers(input)).to eq output
  end
end
