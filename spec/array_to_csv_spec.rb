require 'array_to_csv'
require 'csv'

describe 'array_to_csv' do
  it 'can turn an array to a csv file' do
    array = ['gina']
    array_to_csv(array)
    expect(CSV.read(__dir__ + '/../results.csv')).to eq [array]
  end

  it 'can turn an array with multiple elements into rows' do 
    array = ['gina', 'harry']
    array_to_csv(array)
    expect(CSV.read(__dir__ + '/../results.csv')).to eq [['gina'],['harry']]
  end
end 

