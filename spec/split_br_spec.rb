# frozen_string_literal: true

require 'split_br'

describe 'split_br' do
  it 'splits one from two separated by "<br/> "' do
    string = 'one<br/> two'
    expected = %w[one two]
    expect(split_br(string)).to eq expected
  end
end
