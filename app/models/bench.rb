class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    highest_lat = bounds["northEast"]["lat"].to_f
    lowest_lat = bounds["southWest"]["lat"].to_f
    highest_long = bounds["northEast"]["lng"].to_f
    lowest_long = bounds["southWest"]["lng"].to_f

    all_benches = Bench.all()
    all_benches.select do |bench|
      bench.lat < highest_lat && bench.lat > lowest_lat && bench.long < highest_long && bench.long > lowest_long
    end
  end
end
