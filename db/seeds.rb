# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

100.times do |i|
  lat = rand(37.7..37.8)
  long = -1 * rand(122.3..122.5)
  desc = Faker::Lorem.sentence
  create_params = {
    description: desc,
    lat: lat,
    long: long
  }
  Bench.create!(create_params)
end
