require 'array_to_csv'
require 'csv'

describe 'array_to_csv' do
  it 'can turn a array  to  a csv file' do
    array = ['gina']
    array_to_csv(array)
    expect(CSV.read(__dir__ + '/../results.csv')).to eq [array]
  end 
end