# frozen_string_literal: true

require 'get_unique_slavers'

describe 'get_unique_slavers' do
  it 'returns an array with John from an array with John twice' do
    input = %w[John John]
    output = ['John']
    expect(get_unique_slavers(input)).to eq output
  end
end
