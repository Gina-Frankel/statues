require 'csv'

def array_to_csv(array)
  file = __dir__ + '/../results.csv'
  CSV.open(file, 'wb') do |csv|
    array.each do |link|
      csv << [link]
    end 
  end  
end 