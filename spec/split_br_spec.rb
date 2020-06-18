# frozen_string_literal: true

require 'split_br'

describe 'split_br' do
  it 'splits one from two separated by "<br/> "' do
    string = 'one<br/> two'
    expected = %w[one two]
    expect(split_br(string)).to eq expected
  end
  it 'splits three from four separated by "<br/> "' do
    string = 'three<br/> four'
    expected = %w[three four]
    expect(split_br(string)).to eq expected
  end
end
