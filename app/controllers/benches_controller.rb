class BenchesController < ApplicationController
  def index
    @benches = Bench.all()
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render :create
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :long)
  end
end
